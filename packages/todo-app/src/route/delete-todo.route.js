import { Router } from 'express';
import controller from '../controllers/delete-todo.controller'

const router = Router();

router.get('/delete/:id', controller);

export default router;