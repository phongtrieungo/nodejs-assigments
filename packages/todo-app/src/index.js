import express from 'express';

import addTodoRoute from './route/add-todo.route';
import homeRoute from './route/home.route';

const app = express();
const port = 3000;

app.set('views',  __dirname + '/view');
app.set('view engine', 'pug');

app.use('/add', addTodoRoute);
app.use('/', homeRoute);

app.listen(port, () => console.log(`The example is running on port ${port}`));