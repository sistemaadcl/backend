import { Router } from 'express';
const router = Router();
import { getUserById, getUsers, signin, signUp, updatedRolesWithUser } from '../controllers/users.controllers.js';

router.post('/user/register', signUp);
router.post('/user/login', signin);
router.post('/user/update/rol', updatedRolesWithUser)
router.get('/user', getUsers);
router.get('/user/:id', getUserById);

export default router;