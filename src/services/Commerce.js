import axios from 'axios'
import { server } from './Config';

const path = server + '/commerce/';

export const getAllCommerce = () => { return axios.get(path + 'get_all') }

export const addCommerce = body => { return axios.post(path + 'add', body) }