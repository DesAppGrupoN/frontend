import axios from 'axios'
import { server } from './Config';

const path = server + '/product/';

export const addProduct = body => { return axios.post(path + 'add', body) }
