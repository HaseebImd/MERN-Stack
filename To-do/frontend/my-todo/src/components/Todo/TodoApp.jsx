import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const res = await api.get('/todos');
            setTodos(res.data);
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleTodoAdded = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <TodoForm onTodoAdded={handleTodoAdded} fetchTodos={fetchTodos} />
            <TodoList todos={todos} fetchTodos={fetchTodos} />
        </div>
    );
}

export default TodoApp;