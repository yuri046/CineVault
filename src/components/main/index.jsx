import styles from './styles.module.css'
import SearchBar from '../searchBar'
import Card from '../movieCard'
import { useState } from 'react';

export default function Main() {
    const [movies, setMovies] = useState([]); // Estado para armazenar a lista de filmes

    const handleMovieSearch = (searchedMovies) => {
        setMovies(searchedMovies); // Atualiza o estado com a lista de filmes buscados
    };

    return (
        <div className={styles.main}>
            <SearchBar onMovieSearch={handleMovieSearch} /> {/* Passa a função para SearchBar */}
            <Card movies={movies} /> {/* Renderiza o Card com a lista de filmes */}
        </div>
    );
}