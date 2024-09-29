import styles from './styles.module.css'

export default function SearchBar(){
    return (
        <div className={styles.container}>
            <input className={styles.searchBar} type="text" placeholder="Pesquisar filme" />
            <button className={styles.searchButton}>Pesquisar</button>
        </div>
    )
}