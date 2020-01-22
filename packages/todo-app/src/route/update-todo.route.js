import { Router } from 'express';
import controller from '../controllers/update-todo.controller';

const router = Router();

router.post('/update/:oldContent', controller);

export default router;