import { Router } from 'express';
import controller from '../controllers/add-todo.controller'

const router = Router();

router.post('/add', controller);

export default router;