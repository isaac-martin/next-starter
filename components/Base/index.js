import React, {useState, useEffect} from 'react';
import * as SC from './styles';

const Base = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://swapi.co/api/planets/4/');
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });
  return <SC.Title>Component</SC.Title>;
};

export default Base;
