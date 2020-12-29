const Task = require('../models/task');

getTasks = (req, res) => {
    Task.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

getTask = (req, res) => {
    Task.findOne({ _id: req.params.id })
        .then(docs => { console.log(docs); res.json(docs) })
        .catch(err => console.log(err))
}

createTask = (req, res) => {
    const { body } = req
    console.log(body)

    const task = new Task();
    if (body.templateID != '')
        task.templateID = body.templateID
    else
        task.templateID = null
    task.userID = body.userID
    task.share = body.share
    task.name = body.name
    task.category = body.category
    task.status = body.status
    if (body.subTask != '')
        task.subTask = body.subTask
    else
        task.subTask = null

    console.log(task)

    task.save()
        .then(() => res.json({ _id: `${task.id}` }))
        .catch(err => console.log(err))
}

updateTask = (req, res) => {
    const { body } = req
    const task = {};
    task.templateID = body.templateID
    task.userID = body.userID
    task.share = body.share
    task.name = body.name
    task.category = body.category
    task.status = body.status
    task.subTask = body.subTask

    const query = { _id: req.params.id }

    Task.updateOne(query, task)
        .then(() => res.json({ id: `${req.params.id}` }))
        .catch(err => console.log(err))
}

deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id })
        .then(() => res.json({ id: `${req.params.id}` }))
        .catch(err => console.log(err))
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};

