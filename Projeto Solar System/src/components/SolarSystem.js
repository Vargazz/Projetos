import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
      <div><Title headline="Planetas" />
      </div>
      <div data-testid="solar-system" className="div-solar">
        {planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
      </section>
    );
  }
}

export default SolarSystem;
