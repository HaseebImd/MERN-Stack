import React from 'react';
import TodoItem from './TodoItem';
import api from '../../api/api';
function TodoList({ todos, fetchTodos }) {
    const handleDelete = async (id) => {
        try {
            await api.delete(`/todos/${id}`);
            fetchTodos();
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default TodoList;