import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function InputName() {
  const { filterPlanetsName } = useContext(MyContext);

  return (
    <div>
      <label htmlFor="name">
        <input
          className="inputName"
          type="text"
          placeholder="Pesquise o Planeta"
          data-testid="name-filter"
          onChange={ (event) => filterPlanetsName(event.target) }
        />
      </label>
    </div>
  );
}

export default InputName;
