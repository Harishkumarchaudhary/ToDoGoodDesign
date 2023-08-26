const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    completion_date: {
        type: Date,
        required: true
    }
});

const ToDoTask = mongoose.model('ToDo', toDoSchema); //name and schema for db

module.exports = ToDoTask;

