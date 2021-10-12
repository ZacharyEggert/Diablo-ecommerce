import axios from 'axios';

export const login = (email: string, password: string) => {
    return axios.post('/api/user/login', {
        email,
        password,
    });
};

export const logout = () => {
    return axios.post('/api/user/logout');
};
