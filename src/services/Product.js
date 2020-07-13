import axios from 'axios'
import { server } from './Config';

const path = server + '/product/';

export const addProduct = body => { return axios.post(path + 'add', body) }
export const getProductCategories = () => { return axios.get(path + 'get_categories') }
export const deleteProduct = id => { return axios.get(path + `delete/${id}`) }
export const getProductsByCommerceId = commerceId => { return axios.get(path + `get/by_commerce_id/${commerceId}`) }
export const addProducts = (body,commerceId) => {
    const url = path + 'addBatch'+'/'+commerceId;
    const formData = new FormData();
    formData.append('file',body)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'

        }
    }
    return  axios.post(url, formData, config )
  } 