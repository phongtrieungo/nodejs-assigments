import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('add new todo item');
});

export default router;