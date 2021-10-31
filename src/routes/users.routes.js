import { Router } from 'express';
const router = Router();
import { signin, signUp } from '../controllers/users.controllers.js';

router.post('/user/register', signUp);
router.post('/user/login', signin);

export default router;