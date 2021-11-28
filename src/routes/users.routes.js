import { Router } from 'express';
const router = Router();
import { getRoles, getUserById, getUsers, signin, signUp, updatedRolesWithUser } from '../controllers/users.controllers.js';

router.post('/user/register', signUp);
router.post('/user/login', signin);
router.post('/user/update/rol', updatedRolesWithUser)
router.get('/user', getUsers);
router.get('/roles', getRoles);
router.get('/user/:id', getUserById);

router.get('/', (req, res) => {
    res.send('hello world')
})

export default router;