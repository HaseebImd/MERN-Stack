const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

// @route   GET api/todos
router.get('/', auth, getTodos);

// @route   POST api/todos
router.post('/', auth, createTodo);

// @route   PUT api/todos/:id
router.put('/:id', auth, updateTodo);

// @route   DELETE api/todos/:id
router.delete('/:id', auth, deleteTodo);

module.exports = router;
