const Todo = require('../models/Todo');

// Get all todos for the authenticated user
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(todos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Create a new todo
exports.createTodo = async (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;

    try {
        const newTodo = new Todo({
            title,
            description,
            user: req.user.id
        });
        console.log(newTodo);

        const todo = await newTodo.save();
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        // Ensure user owns the todo
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // Update the todo
        todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set: { title, description, completed } },
            { new: true }
        );

        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete a todo by ID
exports.deleteTodo = async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        // Ensure user owns the todo
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Todo.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Todo removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
