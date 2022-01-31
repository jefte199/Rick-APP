import React from 'react';
import style from './RickSearch.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RickSearch() {
  const [valueInput, setValueInput] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const baseURL = "https://rickandmortyapi.com/api/character";

  function api() {
    axios.get(`${baseURL}/?name=${valueInput}`).then((response) => {
      setResult(response.data.results);
    });
  }

  return (
    <>
      <h1 className={style.containerText}>Rick web</h1>
      <div className={style.superinfoBg}>
        <div className={style.superinfo}>
          <p>Personagens: 826</p>
          <p>Locais: 126</p>
          <p>Episodios: 51</p>
        </div>
      </div>

      <div className={style.containerSearch}>
        <input type="text" value={valueInput} onChange={(event) => setValueInput(event.target.value)} placeholder="exemplo: Rick" className={style.search} />
        <button onClick={api} className={style.button}>Buscar</button>
      </div>

      <div className={style.container}>
        {result ? result.map((item) => {
          return (
            <div className={style.space} key={item.id}>
              <Link to={`person/${item.id}`} className={style.link}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4><b>{item.name}</b></h4>
                </div>
              </Link>
              <h1 className={style.containerText}>{item.nome}</h1>
            </div>
          );
        }) : <h1 className={style.containerText}>Esperando pesquisa</h1>}
      </div>
    </>
  );
}
