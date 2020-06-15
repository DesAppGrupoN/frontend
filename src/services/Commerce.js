import axios from 'axios'
import { server } from './Config';

const path = server + '/commerce/';

export const getAllCommerce = () => { return axios.get(path + 'get_all') }
export const deleteCommerce = id => { return axios.get(path + `delete/${id}`) }
export const addCommerce = body => { return axios.post(path + 'add', body) }
