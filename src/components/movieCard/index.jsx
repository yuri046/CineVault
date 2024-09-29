import styles from './styles.module.css'

export default function Card({ movies }) {
    return (
        <div className={styles.cardContainer}>
            {movies.map((movie, index) => (
                <div key={index} className={styles.card}>
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className={styles.poster}
                        />
                    )}
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
}