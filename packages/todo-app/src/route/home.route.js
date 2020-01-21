import { Router } from 'express';
import todoList from '../models/todo.model';

const router = Router();

router.get('/', (req, res) => {
  const items = todoList.getAll();
  const isEmptyContent = todoList.getContentState();
  
  res.render('../view/home', { items,  isEmptyContent});
});

export default router;