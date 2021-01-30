import { Router } from 'express';
import config from '../../../config/server.js'
import * as utils from '../../model/Utils'

const router = Router();

/**
* Page de connexion
*/
router.get('/', async function(req, res) {
	return res.render('index', {
        data: {
            authenticated: req.logged,
        },
        configuration: {
            render: 'auth/login',
            current_page: 'login',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('auth/login')
        }
	});
});



/**
* Process POST de connexion
*/
router.post('/',  async function(req, res) {
	let error_status, error_message;

	if(req.body.email !== '' && req.body.email && req.body.password !== '' && req.body.password){

		let {email, password} = req.body
		let request = await req.Auth.login(email, password);
		
		if(request){
			res.cookie('token', request, {maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)});
			
			res.redirect('/');
		}else{
			error_status = true;
			error_message = 'Identifiant incorrect';
		}
		
	}else{
		error_status = true;
		error_message = 'Vous devez remplir tout les champs';
	}

	/**
	 * Render de la vue
	 * @render response
	 */
	return res.render('index', {
        data: {
			authenticated: req.logged,
			response: {
				error: error_status,
				message: error_message,
			},
        },
        configuration: {
            render: 'auth/login',
            current_page: 'login',
            base_url: config.ports.app.base_url,
            fs: await utils.getPageConfig('auth/login')
        }
	});
	
});

export default router
