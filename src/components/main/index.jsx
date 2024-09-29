import styles from './styles.module.css'
import SearchBar from '../searchBar'

export default function Main(){
    return (
        <div className={styles.container}>
            <SearchBar/>
        </div>
    )
}