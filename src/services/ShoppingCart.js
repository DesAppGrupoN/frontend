import axios from 'axios'
import { server } from './Config';

const path = server + '/shoppingcart/';

export const addProductToShoppingCart = body => { return axios.post(path + 'add_product', body) }
export const getShoppingCart = user_email => { return axios.get(path + `get_user_shopping_cart/${user_email}`) }