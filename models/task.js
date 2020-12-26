const { Schema, model } = require('mongoose');

const subTaskSchema = new Schema({
    uniqueID: { type: Schema.ObjectId },
    name: { type: String },
    status: { type: Boolean}
    
});

const taskSchema = new Schema({
    uniqueID: { type: Schema.ObjectId },
    templateID: {type: Number},
    userID: {type: Number},
    name: { type: String },
    category: { type: String},
    status: { type: Boolean},
    subTask: [subTaskSchema],

}, { collection: 'tasks' });

const Task = model('Task', taskSchema);
module.exports = Task;