const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    id: { type: Number },
    // price: { type: Number },
    // dishId: { type: String},
    // restaurantId: { type: Number}
}, { collection: 'tasks' });

const Task = model('Task', taskSchema);
module.exports = Task;