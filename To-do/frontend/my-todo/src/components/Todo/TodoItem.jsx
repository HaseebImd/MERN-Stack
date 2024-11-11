import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

function TodoItem({ todo, onDelete }) {
    const formattedDate = format(new Date(todo.createdAt), 'PPpp');

    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h6">{todo.title}</Typography>
                <Typography variant="body2" color="textSecondary">{todo.description}</Typography>
                <Typography variant="caption" color="textSecondary">Created at: {formattedDate}</Typography>
                <IconButton onClick={() => onDelete(todo._id)}>
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default TodoItem;