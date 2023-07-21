const { createToken } = require('../auth/token');
const userService = require('../services/user.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUser(email, password);

    if (user.length === 0) return res.status(400).json({ message: 'Invalid fields' });

    const token = await createToken(email);

    console.log(token);

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { type, message } = await userService.createUser(displayName, email, password, image);

    if (type) return res.status(409).json({ message });

    const token = await createToken(email);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserByID = async (req, res, next) => {
  try {
    const { id } = req.params; 

    const user = await userService.getUserByID(id);

    if (user.type === 'USER_NOT_FOUND') {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userLogin,
  createUser,
  getAllUsers,
  getUserByID,
};