/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import Item from '../interfaces/item';



export default {
    getOne(id: number | string): Promise<any> {
        return axios.get(`/api/item/${id}`);
    },
    getAll(): Promise<any> {
        return axios.get('/api/item');
    },
    create(item: Item): Promise<any> {
        return axios.post('/api/item', item);
    },
    update(item: Item): Promise<any> {
        return axios.put(`/api/item/${item._id}`, item);
    },
    delete(id: number | string): Promise<any> {
        return axios.delete(`/api/item/${id}`);
    },
};
