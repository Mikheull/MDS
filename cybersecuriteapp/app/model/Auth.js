import axios from 'axios';
import qs from 'querystring';
import config from '../../config/server.js'
import dotenv from 'dotenv'

dotenv.config();


export async function isLogged(req, res) {
    if(req.cookies.token) return true;
        return false
}


export async function login(email, password) {
    const requestBody = {
        email: email,
        password: password
    }

    const requestConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    return axios.post(`${config.ports.auth_api.base_url}login`, qs.stringify(requestBody), requestConfig)
        .then((response) => response.data.token)
        .catch((error) => false);
}