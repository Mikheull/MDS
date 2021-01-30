import { Router } from 'express';
const router = Router();

import list from './list';
import create from './create';


router.use('/new', create );
router.use('/', list );

export default router