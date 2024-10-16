import styles from './styles.module.css'
import SearchBar from '../searchBar'
import Card from '../movieCard'
import { useState } from 'react';

export default function Main() {
    const [movies, setMovies] = useState([]); 

    const handleMovieSearch = (searchedMovies) => {
        setMovies(searchedMovies); 
    };

    return (
        <div className={styles.main}>
            <SearchBar onMovieSearch={handleMovieSearch} /> 
            <Card movies={movies} /> 
        </div>
    );
}