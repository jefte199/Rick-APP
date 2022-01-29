import React from 'react';
import style from './RickSearch.module.css'

export default function RickSearch() {
  /*
  <div className={style.superinfoBg}>
  <div className={style.superinfo}>
    <p>Personagens: 826</p>
    <p>Locais: 126</p>
    <p>Episodios: 51</p>
  </div>
</div>
*/
  const [valueInput, setValueInput] = React.useState(null);
  
  React.useEffect(() => {
    console.log(valueInput);
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Rick APP</h1>
        <input type="text" value={valueInput} onChange={(event) => setValueInput(event.target.value)} placeholder="Rick" className={style.search} />
        <button className={style.button}>Buscar</button>
      </div>
    </>
  );
}
