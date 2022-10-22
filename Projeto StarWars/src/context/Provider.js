import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState(data);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const getPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const dataResults = await response.json();
    const filterData = dataResults.results.map((element) => {
      delete element.residents;
      return element;
    });
    setData(filterData);
    setPlanets(filterData);
  };

  const filterPlanetsName = ({ value }) => {
    const result = planets.filter((planet) => planet.name.toLowerCase().includes(value));
    if (value) {
      setPlanets(result);
      setFilterByName({ name: value });
    } else setPlanets(data);
  };

  const filterNumericFunc = ({ column, comparison, value }) => {
    let result;
    if (comparison === 'maior que') {
      result = planets.filter((planet) => planet[column] > Number(value));
    }
    if (comparison === 'menor que') {
      result = planets.filter((planet) => planet[column] < Number(value));
    }
    if (comparison === 'igual a') {
      result = planets.filter((planet) => planet[column] === value);
    }

    setPlanets(result);
    setFilterByNumericValues([
      ...filterByNumericValues,
      value,
    ]);
  };

  const contextValue = {
    planets,
    getPlanets,
    filterPlanetsName,
    filterByName,
    filterNumericFunc,
  };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
