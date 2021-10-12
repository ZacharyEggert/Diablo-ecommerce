import axios from 'axios';


interface IInquiry {
    name: string;
    email: string;
    message: string;
    phone?: string;
}
export const sendInquiry = (inquiry:IInquiry) => {
    return axios.post('/api/inquiry', inquiry);
};

export const getReverbPosts = () => {
    return axios.get('/api/reverb');
};

export const getOneReverbPost = (id:(string | number)) => {
    return axios.get(`/api/reverb/${id}`);
};