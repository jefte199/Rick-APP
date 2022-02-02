import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './Persons.module.css';

export default function Persons() {
  const { id } = useParams();
  const baseURL = "https://rickandmortyapi.com/api/character";
  const [resultApi, setResultApi] = React.useState("");

  React.useEffect(async () => {
    await axios.get(`${baseURL}/${id}`).then((response) => {
      setResultApi(response.data);
    });
  }, []);

  return (
    <>
      <Link to={"/"}>
        <button className={style.statusL}>{"< Home"}</button>
      </Link>)

      <div className={style.row}>
        <div className={style.leftcolumn}>
          <div className={style.card}>
            <h2>{resultApi.name} - ID: {resultApi.id}</h2>
            <img src={resultApi.image} alt={resultApi.name} />
            <br />
            <button className={resultApi.status === 'Alive' ? style.statusL : style.statusD}>{resultApi.status}</button>
            <h3>Tipo: {"??" || resultApi.type}</h3>
            <h3>Species: {resultApi.species}</h3>
            <h3>Participante dos Epsodios:</h3>
            <div className={style.container}>
              {resultApi.episode ? resultApi.episode.map((item) => {
                const nEp = item.split("/", 6)
                return (
                  <Link key={nEp[5]} to={`ep/${nEp[5]}`}>
                    <button className={resultApi.status === 'Alive' ? style.statusL : style.statusD}>{nEp[5].length === 1 ? "0 " + nEp[5] : nEp[5]}</button>
                  </Link>)
              }) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
