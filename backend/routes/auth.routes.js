import {Router} from 'express';
import {Login, SignUp, Logout} from '../controller/auth.controller.js';
const router = Router();

router.post('/login',Login);
router.post('/signup',SignUp);
router.post('/logout',Logout);
export default router;