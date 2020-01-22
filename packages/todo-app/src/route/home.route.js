import { Router } from 'express';
import todoList from '../models/todo.model';

const router = Router();

router.get('/', (req, res) => {
  const items = todoList.getAll();  
  res.render('../view/home', { items,  hasContent: items.length > 0 });
});

export default router;