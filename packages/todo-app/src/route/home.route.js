import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('../view/home');
});

export default router;