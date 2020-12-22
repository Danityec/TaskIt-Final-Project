const { Schema, model } = require('mongoose');

const subtaskSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    status: { type: String}
    
}, { collection: 'subtasks' });

const Subtask = model('Subtask', subtaskSchema);
module.exports = Subtask;