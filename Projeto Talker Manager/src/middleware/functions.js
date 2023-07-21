const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const talkerPath = path.resolve(__dirname, '..', 'talker.json');

const readTalker = async () => {
  const response = await readFile(talkerPath, 'utf-8');
  const talkers = JSON.parse(response);
  return talkers;
};

const getTalkerById = async (id) => {
  const talkers = await readTalker();
  return talkers.find((e) => e.id === Number(id));
};

const createNewTalker = async (name, age, talk) => {
  const talkers = await readTalker();
  const id = Number(talkers[talkers.length - 1].id) + 1;
  const newTalker = {
    id,
    name,
    age,
    talk,
  };
  talkers.push(newTalker);
  await writeFile(talkerPath, JSON.stringify(talkers, null, 2));
  return newTalker;
};

const updateTalker = async (id, name, age, talk) => {
  const talkers = await readTalker();
  const editTalker = talkers.map((talker) => {
    if (talker.id === Number(id)) {
      return { ...talker, name, age, talk };
    }
    return talker;
  });
  await writeFile(talkerPath, JSON.stringify(editTalker, null, 2));
  return { id: Number(id), name, age, talk };
};

const deleteTalker = async (id) => {
  const talkers = await readTalker();
  const deletedTalker = talkers.filter((talker) => talker.id !== Number(id));
  await writeFile(talkerPath, JSON.stringify(deletedTalker, null, 2));
};

const searchTalkers = async (name) => {
  const talkers = await readTalker();
  const search = talkers.filter((talker) => talker.name.includes(name));
  return search;
};

module.exports = {
  readTalker,
  getTalkerById,
  createNewTalker,
  updateTalker,
  deleteTalker,
  searchTalkers,
};