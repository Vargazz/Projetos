const express = require('express');
const { generateToken } = require('../util/token');
const validateEmail = require('../middleware/validateEmail');
const validatePass = require('../middleware/validatePass');

const router = express.Router();

router.post('/', validateEmail, validatePass, async (_req, res) => {
    res.status(200).json({ token: generateToken() });
});

module.exports = router;