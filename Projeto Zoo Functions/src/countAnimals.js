const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal) {
    const animalsSelect = species.find(
      (element) => !animal.specie || element.name === animal.specie,
    );
    const residents = animalsSelect.residents.filter(
      (element1) => !animal.sex || element1.sex === animal.sex,
    ).length;
    return residents;
  }
  const semP = {};
  data.species.forEach((element) => {
    semP[element.name] = element.residents.length;
  });
  return semP;
}

module.exports = countAnimals;
