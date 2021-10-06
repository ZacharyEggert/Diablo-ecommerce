/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';


export default {
    getOne(id) {
        return axios.get(`/api/item/${id}`);
    },
    getAll() {
        return axios.get('/api/item');
    },
    create(item) {
        return axios.post('/api/item', item);
    },
    update(item) {
        return axios.put(`/api/item/${item._id}`, item);
    },
    delete(id) {
        return axios.delete(`/api/item/${id}`);
    }
};