import axios from 'axios';


export const getReverbPosts = () => {
    return axios.get('/api/reverb');
};

export const getOneReverbPost = (id: (string | number)) => {
    return axios.get(`/api/reverb/${id}`);
};
