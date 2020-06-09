import axios from 'axios'
import { server } from './Config';

const path = server + '/commerce/';

export const getAllCommerce = () => { return axios.get(path + 'get_all') }
