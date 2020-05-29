import axios from 'axios'
import { server } from './Config';

const path = server + '/user/';

export const login = body => { return axios.post(path + 'login', body) }
export const register = body => { return axios.post(path + 'add', body) }