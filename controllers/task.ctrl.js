const Task = require('../models/task');

getTasks = (req, res) => {
    Task.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getTask = (req, res) => {
    Task.find({ id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createTask = (req, res) => {
    const { body } = req
    const task = new Task();
    task.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId

    task.save()
        .then(() => res.json({id:`${task.id}`}))
        .catch(err => console.log(err))
}

updateTask = (req, res) => { 
    const { body } = req
    const task = {};
    task.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId
    
    const query = {id: req.params.id}

    Task.updateOne(query, task)
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteTask = (req, res) => {     
    Task.deleteOne({id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask
}