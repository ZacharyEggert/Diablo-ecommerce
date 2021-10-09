import axios from 'axios';

export const sendInquiry = (inquiry) => {
    return axios.post('/api/inquiry', inquiry);
};
