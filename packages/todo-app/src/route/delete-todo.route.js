import { Router } from 'express';
import controller from '../controllers/delete-todo.controller'

const router = Router();

router.post('/delete/:id', controller);

export default router;