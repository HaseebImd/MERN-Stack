import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(formData);
            localStorage.setItem('token', res.data.token);
            alert('Login successful');
            navigate('/'); // Redirect to the To-Do page after login
        } catch (error) {
            console.error(error.response.data);
            alert('Invalid credentials');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="email" label="Email" type="email" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
            </form>
        </Container>
    );
}

export default Login;
