const isLoginValid = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
};

const validateUser = (req, res, next) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { displayName, email, password } = req.body;
    if (displayName === undefined || displayName.length < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
      if (!regexEmail.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    } if (password.length < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    return next();
  };

module.exports = {
    isLoginValid,
    validateUser,
};
