import axios from 'axios'
import { server } from './Config';

const path = server + '/shoppingcart/';

export const addProductToShoppingCart = body => { return axios.post(path + 'add_product', body) }
export const removeProductFromShoppingCart = body => { return axios.post(path + 'remove_product', body) }
export const changeQuantityOfProductFromShoppingCart = body => { return axios.post(path + 'change_quantity', body) }
export const getShoppingCart = user_email => { return axios.get(path + `get_user_shopping_cart/${user_email}`) }