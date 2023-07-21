const express = require('express');
const loginRouter = require('./routes/login.route');
const userRouter = require('./routes/user.route');
const categoriesRoutes = require('./routes/categories.route');
const postRoutes = require('./routes/post.route');

// ...

const app = express();

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

module.exports = app;
