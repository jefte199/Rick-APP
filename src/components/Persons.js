import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Persons.module.css';

export default function Persons() {
  const { id } = useParams();
//  const baseURL = "https://rickandmortyapi.com/api/character";
  const [resultApi, setResultApi] = React.useState("https://rickandmortyapi.com/api/character/1");

  React.useEffect(async () => {
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
      setResultApi(response.data.results);
    });
  }, []);

  console.log(resultApi);
  return (
    <>
      <div className={style.row}>
        <div className={style.leftcolumn}>
          <div className={style.card}>
            <h2>Name</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
}
