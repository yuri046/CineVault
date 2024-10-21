import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function Detalhes() {
  const { title } = useParams();
  const location = useLocation();
  const { releaseDate, overview, imageUrl } = location.state || {};
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [icon, setIcon] = useState(false);

  const Favoritar = () => {
    const favoritoExistente = listaFavoritos.find(
      (item) => item.poster === imageUrl
    );

    const novaLista = favoritoExistente
      ? listaFavoritos.filter((item) => item.poster !== imageUrl)
      : [...listaFavoritos, { poster: imageUrl }];

    setListaFavoritos(novaLista);
    localStorage.setItem('listaFavoritos', JSON.stringify(novaLista));
    setIcon(!favoritoExistente);
  };

  // Carrega os favoritos do localStorage ao montar o componente
  useEffect(() => {
    const favoritosSalvos = localStorage.getItem('listaFavoritos');
    if (favoritosSalvos) {
      setListaFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  // Verifica se o filme atual já está nos favoritos
  useEffect(() => {
    const favoritoExistente = listaFavoritos.some(
      (item) => item.poster === imageUrl
    );
    setIcon(favoritoExistente);
  }, [imageUrl, listaFavoritos]);

  return (
    <div className={styles.container}>
      {title && <h2 className={styles.titulo}>{title}</h2>}
      {imageUrl && (
        <img className={styles.poster} src={imageUrl} alt={`Poster ${title}`} />
      )}
      {releaseDate && (
        <p className={styles.date}>Data de lançamento: {releaseDate}</p>
      )}
      <i
        onClick={Favoritar}
        className={`fa fa-star ${icon ? styles.iconFavorito : '' }`}
        style={{ fontSize: '30px' }}
      ></i>
      <p className={styles.descricao}>{overview}</p>
    </div>
  );
}