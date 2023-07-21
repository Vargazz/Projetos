const express = require('express');
const { readTalker, 
    getTalkerById, 
    createNewTalker, 
    updateTalker, 
    deleteTalker, searchTalkers } = require('../middleware/functions');
const { validateTalkerName } = require('../middleware/validateName');
const { validateTalkerAge } = require('../middleware/validateAge');
const { validateTalkRate } = require('../middleware/validateRate');
const { validateTalkerTalk } = require('../middleware/validateTalk');
const { validateToken } = require('../middleware/validateToken');
const { validateTalkWatchDate } = require('../middleware/validateWatchDate');

const router = express.Router();

router.get('/search', validateToken, async (req, res) => {
    const { q } = req.query;
    const search = await searchTalkers(q);
    res.status(200).json(search);
  });

router.get('/', async (_req, res) => {
    const result = await readTalker();
    return res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkRead = await getTalkerById(id);

    if (!talkRead) {
        res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } else {
        res.status(200).json(talkRead);
    }
});

router.post('/', validateToken, validateTalkerName, validateTalkerAge, validateTalkerTalk, 
validateTalkRate, validateTalkWatchDate, async (req, res) => {
  const { name, age, talk } = req.body;
  const newTalker = await createNewTalker(name, age, talk);
  res.status(201).json(newTalker);
});

router.put('/:id', validateToken, validateTalkerName, validateTalkerAge, validateTalkerTalk, 
validateTalkRate, validateTalkWatchDate, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const editedTalker = await updateTalker(id, name, age, talk);
  res.status(200).json(editedTalker);
});

router.delete('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    await deleteTalker(id);
    res.status(204).send();
  });

module.exports = router;