import axios from 'axios'
import { server } from './Config';

const path = server + '/user/';

export const login = body => { return axios.post(path + 'login', body) }
export const register = body => { return axios.post(path + 'add', body) }
export const userLoggedIn = body => { return axios.post(path + 'userLoggedIn', body) }
export const getUserCommerces = userEmail => { return axios.get(path + `get_commerces/${userEmail}`) }
export const getUserPurchaseHistory = userEmail => { return axios.get(path + `get_purchase_history/${userEmail}`) }