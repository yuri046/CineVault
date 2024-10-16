import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
    <div className={styles.container}>
        
        <h1>CineVault</h1>
        <nav className={styles.navbar}>
            <Link to='/'>Home</Link>
            <Link to='favoritos'>Favoritos</Link>
        </nav>
        
    </div>
    )
}