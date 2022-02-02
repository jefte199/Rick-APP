import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Ep.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Ep() {

  const { id, ep } = useParams();
  const baseURL = "https://rickandmortyapi.com/api/episode";
  const [resultApi, setResultApi] = React.useState("");

  React.useEffect(async () => {
    await axios.get(`${baseURL}/${ep}`).then((response) => {
      setResultApi(response.data);
    });
  }, []);

  return (
    <>
      <Link to={"/"}><button className={style.statusL}>{"<< Home"}</button></Link> <Link to={`/person/${id}`}><button className={style.statusL}>{"< Personagem"}</button>
      </Link>

      <div className={style.row}>
        <div className={style.leftcolumn}>
          <div className={style.card}>
            <h2>{resultApi.name} - ID: {resultApi.id}</h2>
            <br />
            <br />
            <h3>Data de lançamento: {resultApi.air_date}</h3>
            <h3>Epsodio: {resultApi.episode}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
