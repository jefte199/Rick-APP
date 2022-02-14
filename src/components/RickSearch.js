import React from 'react';
import style from './RickSearch.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RickSearch() {
  const [valueInput, setValueInput] = React.useState(null);
  const [resultApi, setResultApi] = React.useState(null);
  const [load, setLoad] = React.useState(false);

  const baseURL = "https://rickandmortyapi.com/api/character";

  async function api() {
    setLoad(true);
    try {
      await axios.get(`${baseURL}/?name=${valueInput}`).then((response) => {
        setResultApi(response.data.results);
      });
      setLoad(false);
    } catch (error) {
      setLoad(true);
    }
  }

  return (
    <>
      <div className={style.containerSearch}>
        <input type="text" value={valueInput} onChange={(event) => setValueInput(event.target.value)} placeholder="exemplo: Rick" className={style.search} />
        <button onClick={api} className={style.button}>Buscar</button>
      </div>

      <div className={style.container}>
        {resultApi ? resultApi.map((item) => {
          return (
            <div className={style.space} key={item.id}>
              <Link to={`person/${item.id}`} className={style.link}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4><b>{item.name}</b></h4>
                </div>
                <button className={item.status == 'Alive' ? style.statusL : style.statusD}>{item.status}</button>
              </Link>
              <h1 className={style.status}>{item.nome}</h1>
            </div>
          );
        }) : <h1 className={style.containerText}>Esperando pesquisa {load ? "Carregando....." : null}</h1>}
      </div>
      <div className={style.footer}>
        <p>Apenas 20 respostas por pesquisa</p>
      </div>

    </>
  );
}
