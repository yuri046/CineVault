import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles.module.css'


export default function Detalhes() {
  const { title } = useParams();
  const location = useLocation();
  const { releaseDate, overview, imageUrl } = location.state || {};
  const [listaFavoritos, setListaFavoritos] = useState([])
  const [favorito, setFavorito] = useState({poster:'', })
  const [icon, setIcon] = useState(false)





  const Favoritar = () => {
    const novoFavorito = { poster: imageUrl };
    
    const favoritoExistente = listaFavoritos.find(
      (item) => item.poster === novoFavorito.poster
    );
  
    // Se já estiver, remove-o, caso contrário, adiciona-o
    if (favoritoExistente) {
      const novaLista = listaFavoritos.filter(
        (item) => item.poster !== novoFavorito.poster
      );
      setListaFavoritos(novaLista);
      localStorage.setItem('listaFavoritos', JSON.stringify(novaLista));

      setIcon(!icon)
    } else {
      const novaLista = [...listaFavoritos, novoFavorito];
      setListaFavoritos(novaLista);
      localStorage.setItem('listaFavoritos', JSON.stringify(novaLista));

      setIcon(!icon)
    }

    
  
  };
  
  // Carrega os favoritos do localStorage ao montar o componente
  useEffect(() => {
    const favoritosSalvos = localStorage.getItem('listaFavoritos');
    if (favoritosSalvos) {
      setListaFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);
  
  // Atualiza o localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    if (favorito.poster) {
      const novaLista = [...listaFavoritos, favorito];
      setListaFavoritos(novaLista);
      localStorage.setItem('listaFavoritos', JSON.stringify(novaLista));
      // Reseta o estado do favorito
      setFavorito({ poster: '' });
    }
  }, [favorito]);
  
 

  return (
    <div className={styles.container}>
      {title && <h2 className={styles.titulo}>{title}</h2>}
      {imageUrl && <img className={styles.poster} src={imageUrl} alt={`Poster ${title}`} />}
      {releaseDate && <p className={styles.date}>Data de lançamento: {releaseDate}</p>}
      <i onClick={Favoritar}  className={`fa fa-star ${icon ? styles.iconFavorito : '' }`} style={{ fontSize: '30px' }}></i>
      <p className={styles.descricao}>{overview}</p>
    </div>
  );
}