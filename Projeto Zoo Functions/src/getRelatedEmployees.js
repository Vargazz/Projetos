const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((element) => element.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };
