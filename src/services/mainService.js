import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        "Content-type": "application/json"
    }
})

API.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Token caducado, redirigir al login
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/'; // O usa router.push en Vue
        }
        return Promise.reject(error);
    }
);