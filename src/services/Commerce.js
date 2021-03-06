import axios from 'axios'
import { server } from './Config';

const path = server + '/commerce/';

export const getAllCommerce = () => { return axios.get(path + 'get_all') }
export const getCommerceSectors = () => { return axios.get(path + 'get_sectors') }
export const getCommercePaymethods = () => { return axios.get(path + 'get_paymethods') }
export const deleteCommerce = body => { return axios.post(path + 'delete', body) }
export const addCommerce = body => { return axios.post(path + 'add', body) }
export const searchCommerce = search => { return axios.get(path + `search/${search}`) }
