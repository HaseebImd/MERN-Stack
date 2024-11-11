import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import api from '../../api/api';

function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/register', formData);
            alert('Registration successful');
            localStorage.setItem('token', res.data.token);
        } catch (error) {
            console.error(error.response.data);
            alert('Error registering user');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Register</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="name" label="Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="email" label="Email" type="email" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
            </form>
        </Container>
    );
}

export default Register;
