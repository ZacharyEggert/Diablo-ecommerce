import axios from 'axios';


export const getReverbPosts = () => {
    return axios.get('/api/reverb');
};

export const getOneReverbPost = (id: (string | number)) => {
    return axios.get(`/api/reverb/${id}`);
};

export const importReverbPosts = () => {
    return axios.post('/api/reverb/import/all');
}

export const importReverbPostsRecent = () => {
    return axios.post('/api/reverb/import/recent');
}
