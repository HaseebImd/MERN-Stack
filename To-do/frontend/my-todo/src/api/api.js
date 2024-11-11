import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add JWT token to headers if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
});

// Auth APIs
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (credentials) => api.post('/auth/login', credentials);

// Todo APIs
export const getTodos = () => api.get('/todos');
export const createTodo = (todoData) => api.post('/todos', todoData);
export const updateTodo = (id, updatedData) => api.put(`/todos/${id}`, updatedData);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export default api;
