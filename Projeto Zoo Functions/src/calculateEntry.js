const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) { acc.child += 1; }
    if (curr.age >= 18 && curr.age < 50) { acc.adult += 1; }
    if (curr.age >= 50) { acc.senior += 1; }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
