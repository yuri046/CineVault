import styles from './styles.module.css'
import SearchBar from '../searchBar'

export default function Header(){
    return (
    <div className={styles.container}>
        
        <h1>CineVault</h1>
        <nav className={styles.navbar}>
            <a href="">Home</a>
            <a href="">Favoritos</a>
        </nav>
        
    </div>
    )
}