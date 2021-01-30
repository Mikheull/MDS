import { Router } from 'express';
import * as utils from '../model/Utils'
import config from '../../config/server.js'
import {is_logged} from '../middlewares/is_logged'

import profile from './profile';
import products from './products';
import home from './index';
import auth from './auth';

const router = Router();


router.use('/', home );
router.use('/', auth );
router.use('/profile', is_logged, profile  );
router.use('/products', is_logged, products );


/**
* Page d'erreur (404)
*/
router.use(async function(req,res){
    return res.render('index', {
        data: {
            authenticated: req.logged,
            user_data: req.user_data
        },
        configuration: {
            render: 'errors/404',
            current_page: '404',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('errors/404')
        }
    });
});

export default router
