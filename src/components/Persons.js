import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Persons.module.css';

export default function Persons() {
  const { id } = useParams();
  const baseURL = "https://rickandmortyapi.com/api/character";
  const [resultApi, setResultApi] = React.useState("https://rickandmortyapi.com/api/character/1");

  React.useEffect(async () => {
    await axios.get(`${baseURL}/${id}`).then((response) => {
      setResultApi(response.data);
    });
  }, []);

  return (
    <>
      <div className={style.row}>
        <div className={style.leftcolumn}>
          <div className={style.card}>
            <h2>{resultApi.name} ID: {resultApi.id}</h2>
            <img src={resultApi.image} alt={resultApi.name} />
            <br />
            <button className={resultApi.status === 'Alive' ? style.statusL : style.statusD}>{resultApi.status}</button>
            <h3>Tipo: {"??" || resultApi.type}</h3>
            <h3>species: {resultApi.species}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
