import React, { useContext, useEffect } from 'react';
import MyContext from '../context/myContext';
import InputName from './inputName';
import InputNumeric from './inputNumeric';

function Table() {
  const { getPlanets, planets } = useContext(MyContext);

  useEffect(() => {
    getPlanets();
  }, []); // eslint-disable-line
  return (
    <div className="divTable">
      <InputNumeric />
      <InputName />

      <table>
        <thead>
          <tr>
            <th className="tableUp">Name</th>
            <th className="tableUp">Rotation Period</th>
            <th className="tableUp">Orbital Period</th>
            <th className="tableUp">Diameter</th>
            <th className="tableUp">Climate</th>
            <th className="tableUp">Gravity</th>
            <th className="tableUp">Terrain</th>
            <th className="tableUp">Surface Water</th>
            <th className="tableUp">Population</th>
            <th className="tableUp">Films</th>
            <th className="tableUp">Created</th>
            <th className="tableUp">Edited</th>
            <th className="tableUp">URL</th>
          </tr>
        </thead>

        <tbody>
          {
            planets.map((element) => (
              <tr key={ element.name } className="tabela">
                <td>{ element.name }</td>
                <td>{ element.rotation_period }</td>
                <td>{ element.orbital_period }</td>
                <td>{ element.diameter }</td>
                <td>{ element.climate }</td>
                <td>{ element.gravity }</td>
                <td>{ element.terrain }</td>
                <td>{ element.surface_water }</td>
                <td>{ element.population }</td>
                <td>{ element.films.map((movie) => <p key={ movie }>{ movie }</p>) }</td>
                <td>{ element.created }</td>
                <td>{ element.edited }</td>
                <td>{ element.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
