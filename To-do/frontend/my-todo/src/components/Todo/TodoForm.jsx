import { TextField, Button, Container } from '@mui/material';
import api from '../../api/api';
import { useState } from 'react';

function TodoForm({ onTodoAdded, fetchTodos }) {
    const [todo, setTodo] = useState({ title: '', description: '' });

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/todos', todo);
            onTodoAdded(res.data);
            setTodo({ title: '', description: '' });
            fetchTodos();
        } catch (error) {
            console.log(error);
            if (error.response) {
                console.error(error.response.data);
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField name="title" label="Title" fullWidth margin="normal" onChange={handleChange} value={todo.title} />
                <TextField name="description" label="Description" fullWidth margin="normal" onChange={handleChange} value={todo.description} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Todo</Button>
            </form>
        </Container>
    );
}

export default TodoForm;