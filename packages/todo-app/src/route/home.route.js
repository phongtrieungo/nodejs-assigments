import { Router } from 'express';
import todoList from '../models/todo.model';

const router = Router();

router.get('/', (req, res) => {
  console.log(todoList.getAll());
  
  res.render('../view/home');
});

export default router;