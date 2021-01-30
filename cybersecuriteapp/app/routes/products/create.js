import { Router } from 'express';
import config from '../../../config/server.js'
import * as utils from '../../model/Utils'
import { createProduct } from '../../model/Product';

const router = Router();


router.get('/', async function(req, res) {
    return res.render('index', {
        data: {
            authenticated: req.logged,
            user_data: req.user_data
        },
        configuration: {
            render: 'products/create',
            current_page: 'products',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('products/create')
        }
    });
});

router.post('/', async function(req, res) {
    let request = await createProduct(req.body)
    if(request){
        res.redirect(request.product.id);
    }else{
        res.redirect('');
    }
});

export default router
