const { Schema, model } = require('mongoose');

const subtaskSchema = new Schema({
    id: { type: Number },
    // price: { type: Number },
    // dishId: { type: String},
    // restaurantId: { type: Number}
}, { collection: 'subtasks' });

const Subtask = model('Subtask', subtaskSchema);
module.exports = Subtask;