import { Router } from 'express';
const router = Router();
import { signUp } from '../controllers/users.controllers.js';

router.post('/user/register', signUp);

export default router;