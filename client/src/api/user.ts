import axios from 'axios';

export const login = (email: string, password: string) => {
    return axios.post('/api/user/login', {
        email,
        password,
    });
};

export const validateUser = () => {
    return axios.post('/api/user/validate');
};

export const logout = () => {
    return axios.post('/api/user/logout');
};
