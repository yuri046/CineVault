import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

export default function Favoritos(){
    const [listaFavoritos, setListaFavoritos] = useState([])

    useEffect(()=>{
        const favoritos = localStorage.getItem('listaFavoritos')

        if(favoritos){
            setListaFavoritos(JSON.parse(favoritos))
        }
    }, [])


   

    return (
        <div>
      {listaFavoritos.length > 0 ? (
        <ul className={styles.container}>
          {listaFavoritos.map((item, index) => (
            <li key={index}>
              <img src={item.poster} alt={`Poster ${index}`} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum favorito salvo.</p>
      )}
    </div>

    )
}