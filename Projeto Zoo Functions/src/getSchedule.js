const data = require('../data/zoo_data');

const { species, hours } = data;

function semana(dias) {
  const { open, close } = hours[dias];
  const obj = {};
  if (dias !== 'Monday') {
    obj[dias] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: species.filter((element) => element.availability.includes(dias))
        .map((param) => param.name),
    };
    return obj;
  }
  return {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}
function getSchedule(scheduleTarget) {
  const animals = species.some(({ name }) => name === scheduleTarget);
  if (Object.keys(hours).includes(scheduleTarget)) {
    return semana(scheduleTarget);
  }
  if (!scheduleTarget || !animals) {
    return Object.keys(hours).reduce((acc, curr) => ({ ...acc, ...semana(curr) }), {});
  }
  const animal = species.filter((element) => element.name === scheduleTarget);
  const [{ availability }] = animal;
  return availability;
}

module.exports = getSchedule;
