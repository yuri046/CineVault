import styles from './styles.module.css';
import {useNavigate } from 'react-router-dom';

export default function Card({ movies }) {
    const navigate = useNavigate();

    const exibeDetalhes = (title, release_date, overview, posterPath) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
        navigate(`/detalhes/${encodeURIComponent(title)}`, {
            state: {
                releaseDate: release_date,
                overview: overview,
                imageUrl: imageUrl,
                
            }
        });
    };
    return (
        <div className={styles.cardContainer}>
            {movies.map((movie, index) => (

                <div
                    key={index}
                    className={styles.card}
                    onClick={() => exibeDetalhes(movie.title, movie.release_date, movie.overview, movie.poster_path)}
                >
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className={styles.poster}
                        />
                    )}
                    <div className={styles.informacoes}>
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
                
            ))}
        </div>
    );
}