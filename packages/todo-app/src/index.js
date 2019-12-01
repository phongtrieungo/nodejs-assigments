import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';

import addTodoRoute from './route/add-todo.route';
import homeRoute from './route/home.route';
import NotFoundRoute from './route/404.route';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.set('views',  __dirname + '/view');
app.set('view engine', 'pug');

app.use(addTodoRoute);
app.use(homeRoute);
app.use(NotFoundRoute);

app.listen(port, () => console.log(`The example is running on port ${port}`));