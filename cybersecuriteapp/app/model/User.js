import axios from 'axios';
import config from '../../config/server.js'
import dotenv from 'dotenv'

dotenv.config();

const axios_instance = axios.create({ 
    baseURL: config.ports.api.base_url,
    headers: {'x-access-token': process.env.ACCESS_TOKEN}
});

/**
 * Récupérer les données d'un client par son ID
 * @param {String} val 
 * @return {Boolean - Response}
 */
export async function getAccountData(val) {
    return axios_instance.get(`v1/users/${val}`)
        .then((response) => (response.data) ? response.data.data.user : false)
        .catch((error) => false);
}