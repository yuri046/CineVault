import styles from './styles.module.css';
import axios from 'axios';
import { useState } from 'react';

export default function SearchBar({ onMovieSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY,
                query: searchTerm,
                language: 'pt-BR',
            },
        })
        .then(response => {
            if (response.data.results) {
                onMovieSearch(response.data.results);
            } else {
                onMovieSearch([]);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar filme:', error);
            onMovieSearch([]); 
        });
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.searchBar}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Pesquisar filme"
            />
            <button className={styles.searchButton} onClick={handleSearch}>Pesquisar</button>
        </div>
    );
}