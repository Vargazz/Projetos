const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = employees.find((element) => element.id === id);
  const firstAnimal = person.responsibleFor[0];
  const animalsSpecie = species.find((element) => element.id === firstAnimal).residents;
  const old = animalsSpecie.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
