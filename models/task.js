const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    category: { type: String},
    status: { type: String}
}, { collection: 'tasks' });

const Task = model('Task', taskSchema);
module.exports = Task;