import React, { useContext, useState } from 'react';
import MyContext from '../context/myContext';

const stateFirst = { column: 'population', comparison: 'maior que', value: 0 };
function InputNumeric() {
  const {
    filterNumericFunc,
  } = useContext(MyContext);

  const [state, setState] = useState(stateFirst);
  const [filter, setFilter] = useState({});
  const optionsColumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const onInputChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleClickFilter = () => {
    filterNumericFunc(state);
    setState(stateFirst);
    setFilter(state);
  };

  return (
    <div className="numeric">
      <label htmlFor="coluna">
        <select
          name="column"
          data-testid="column-filter"
          id="column"
          onChange={ onInputChange }
          value={ state.column }
          className="optionInput"
        >
          {optionsColumn.map((column) => !column.includes(filter.column) && (
            <option key={ column } className="optionInput">{column}</option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          id="comparison"
          onChange={ onInputChange }
          value={ state.comparison }
          className="optionInput"
        >
          <option className="optionInput">maior que</option>
          <option className="optionInput">menor que</option>
          <option className="optionInput">igual a</option>
        </select>
      </label>

      <input
        type="number"
        id="value-filter"
        data-testid="value-filter"
        name="value"
        onChange={ onInputChange }
        value={ state.value }
        className="valueInput"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
        className="buttonFiltrar"
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumeric;
