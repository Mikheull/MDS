import { Router } from 'express';
import config from '../../../config/server.js'
import * as utils from '../../model/Utils'
import { getProducts, getProduct, deleteProduct} from '../../model/Product';

const router = Router();



router.get('/', async function(req, res) {
    let products = await getProducts()
    
    return res.render('index', {
        data: {
            authenticated: req.logged,
            user_data: req.user_data,
            products
        },
        configuration: {
            render: 'products/list',
            current_page: 'products',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('products/list')
        }
    });
});


router.get('/:product', async function (req, res) {
	let ref = req.params.product
    let product = await getProduct(ref)
  
	return res.render('index', {
        data: {
            authenticated: req.logged,
			user_data: req.user_data,
			product
        },
        configuration: {
            render: 'products/item',
            current_page: 'products',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('products/item')
        }
	});
})


router.post('/:product', async function (req, res) {
    let ref = req.params.product
    
    let request = await deleteProduct(ref)
    if(request){
        res.redirect('../');
    }else{
        res.redirect('');
    }
})

export default router
