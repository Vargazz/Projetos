const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((element) => element.name === animal);

  return specie.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
