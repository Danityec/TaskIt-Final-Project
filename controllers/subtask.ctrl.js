const Subtask = require('../models/subtask');

getSubtasks = (req, res) => {
    Subtask.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getSubtask = (req, res) => {
    Subtask.find({ id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createSubtask = (req, res) => {
    const { body } = req
    const subtask = new Subtask();
    subtask.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId

    subtask.save()
        .then(() => res.json({id:`${subtask.id}`}))
        .catch(err => console.log(err))
}

updateSubtask = (req, res) => { 
    const { body } = req
    const subtask = {};
    subtask.id = body.id
    subtask.name = body.name
    subtask.status = body.status
    
    const query = {id: req.params.id}

    Subtask.updateOne(query, subtask)
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteSubtask = (req, res) => {     
    Subtask.deleteOne({id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getSubtasks, 
    getSubtask, 
    createSubtask, 
    updateSubtask, 
    deleteSubtask
}