const {Schema, model} = require('mongoose');

const subTaskSchema = new Schema({
    name: {type: String, require: true},
    completed: {type: Boolean}
});

const taskSchema = new Schema({
    templateID: {type: Number},
    userID: {type: String},
    sharedWith: {type: Array},
    name: {type: String, require: true},
    category: {type: String, require: true},
    completed: {type: Boolean},
    subTask: [subTaskSchema],
}, {collection: 'tasks'});

const Task = model('Task', taskSchema);

module.exports = Task