import { Router } from 'express';
const router = Router();

import login from './login';
import logout from './logout';

router.use('/login', login );
router.use('/logout', logout );

export default router