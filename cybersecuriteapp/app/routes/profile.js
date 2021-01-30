import { Router } from 'express';
import config from '../../config/server.js'
import * as utils from '../model/Utils'
import * as User from '../model/User'
import jwt from 'jsonwebtoken'

const router = Router();

router.get('/', async function(req, res) {
    const usertoken = req.cookies.token;
    let user_data = [];
    if(usertoken){
        jwt.verify(usertoken, 'fHAwxPaZF6wxnZYuxnEF', async (err, verifiedJwt) => {
            if(!err){
                let user_data = await User.getAccountData(verifiedJwt.user._id)
                return res.render('index', {
                    data: {
                        authenticated: req.logged,
                        user_data: user_data
                    },
                    configuration: {
                        render: 'profile',
                        current_page: 'profile',
                        base_url: config.ports.app.base_url,
                        fs: await utils.getPageConfig('profile')
                    }
                });
            }
        })
    }else{
        return res.render('index', {
            data: {
                authenticated: req.logged,
                user_data: user_data
            },
            configuration: {
                render: 'profile',
                current_page: 'profile',
                base_url: config.ports.app.base_url,
                fs: await utils.getPageConfig('profile')
            }
        });
    }
    
});


export default router
