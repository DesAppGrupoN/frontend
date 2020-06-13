import axios from 'axios'
import { server } from './Config';

const path = server + '/product/';

export const addProduct = body => { return axios.post(path + 'add', body) }
export const deleteProduct = id => { return axios.get(path + `delete/${id}`) }
export const getProductsByCommerceId = commerceId => { return axios.get(path + 'get/by_commerce_id/1') }
