import { Router } from 'express';
import config from '../../config/server.js'
import * as utils from '../model/Utils'

const router = Router();

router.get('/', async function(req, res) {
    return res.render('index', {
        data: {
            authenticated: req.logged,
            user_data: req.user_data
        },
        configuration: {
            render: 'home',
            current_page: 'home',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('home')
        }
    });
});

export default router
