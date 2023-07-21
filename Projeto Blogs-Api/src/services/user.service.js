const { User } = require('../models');

const getUser = async (email, password) => {
    const user = await User.findAll({ where: { email, password } });

    return user;
};

const createUser = async (displayName, email, password, image) => {
    const verify = await User.findAll({ where: { email } });
    if (verify.length > 0) return { type: 409, message: 'User already registered' };
    const user = await User.create({ displayName, email, password, image });
    console.log(user);
    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
};

const getUserByID = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    
    if (user === null) return { type: 'USER_NOT_FOUND' };

    return user;
};

module.exports = {
    getUser,
    createUser,
    getAllUsers,
    getUserByID,
};
