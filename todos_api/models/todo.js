var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    label: {
        type: String,
        default: 'General'
    }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;