import { useEffect, useState } from "react"

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
        <ul>
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