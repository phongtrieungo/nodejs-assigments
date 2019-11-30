import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('get all todo items');
});

export default router;