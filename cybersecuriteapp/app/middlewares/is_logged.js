import jwt from 'jsonwebtoken';

import * as _Auth from '../model/Auth'
import config from '../../config/server.js'
const dotenv = require('dotenv').config()

module.exports = {
    is_logged: async function is_logged (req, res, next) {
		const logged = await _Auth.isLogged(req);

		if (logged) {
			const usertoken = req.cookies.token;
			if(usertoken){
				jwt.verify(usertoken, 'fHAwxPaZF6wxnZYuxnEF', async (err, verifiedJwt) => {
					if(!err){
						jwt.verify(usertoken, 'fHAwxPaZF6wxnZYuxnEF');
					}else{
						res.redirect(`${config.ports.app.base_url}login`)
					}
				})
			}else{
				res.redirect(`${config.ports.app.base_url}login`)
			}
		}else{
			res.redirect(`${config.ports.app.base_url}login`)
		}
		
		next()
    },
}

  