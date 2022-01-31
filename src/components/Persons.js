import React from 'react';
import { useParams } from 'react-router-dom';

export default function Persons() {
  const { id } = useParams();

  return (
    <>
      <h1>{console.log(id)}</h1>
    </>
  );
}
