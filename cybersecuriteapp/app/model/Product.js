import axios from 'axios';
import config from '../../config/server.js'
import dotenv from 'dotenv'

dotenv.config();

const axios_instance = axios.create({ 
    baseURL: config.ports.api.base_url,
    headers: {'x-access-token': process.env.ACCESS_TOKEN}
});


export async function getProducts() {
	return axios_instance.get('v1/products')
		.then((response) => (response.data.data) ? response.data.data : false)
		.catch((error) => false);
}

export async function getProduct(identifier) {
	return axios_instance.get(`v1/products/${identifier}`)
		.then((response) => (response.data.data) ? response.data.data : false)
		.catch((error) => false);
}

export async function createProduct(body) {
	return axios_instance.post('v1/products/create', {name: body.title, description: body.content, photo: body.image})
		.then((response) => (response.data.data) ? response.data.data : false)
		.catch((error) => false);
}
export async function deleteProduct(identifier) {
	return axios_instance.delete(`v1/products/${identifier}/delete`)
		.then((response) => (response.data.data) ? true : false)
		.catch((error) => false);
}
