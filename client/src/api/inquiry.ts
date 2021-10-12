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

