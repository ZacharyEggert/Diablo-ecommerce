/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import Item from '../interfaces/item';

export const getOneItem = (id: number | string): Promise<any> => {
    return axios.get(`/api/item/${id}`);
};

export const getAllItems = (): Promise<any> => {
    return axios.get('/api/item');
};
export const createItem = (item: Item): Promise<any> => {
    return axios.post('/api/item', item);
};
export const updateItem = (item: Item): Promise<any> => {
    return axios.put(`/api/item/${item._id}`, item);
};
export const deleteItem = (id: number | string): Promise<any> => {
    return axios.delete(`/api/item/${id}`);
};
