import axios from 'axios';

export const sendInquiry = (inquiry) => {
    return axios.post('/api/inquiry', inquiry);
};

export const getReverbPosts = () => {
    return axios.get('/api/reverb');
};

export const getOneReverbPost = (id) => {
    return axios.get(`/api/reverb/${id}`);
};