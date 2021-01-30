import { Router } from 'express';
const router = Router();
import jwt from 'jsonwebtoken';


router.get('/', function (req, res) {

	const usertoken = req.cookies.token;
	if(usertoken){
		res.cookie('token', 'null', {maxAge: 0});
		res.clearCookie('token');
	}
	
	return res.redirect('/login');
})

export default router
