const { Schema, model } = require('mongoose');

const subTaskSchema = new Schema({
    subtaskID: { type: String },
    name: { type: String },
    status: { type: Boolean}
    
});

const taskSchema = new Schema({
    templateID: {type: String},
    userID: {type: String},
    share: {type: Array},
    name: { type: String },
    category: { type: String},
    status: { type: Boolean},
    subTask: [subTaskSchema],

}, { collection: 'tasks' });

const Task = model('Task', taskSchema);

module.exports = Task
