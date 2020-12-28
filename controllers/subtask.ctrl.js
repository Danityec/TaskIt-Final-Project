const Task = require('../models/task');


getSubTasks = (req, res) => {
    Task.findOne({ _id: req.params.task })
    .then(docs => {(docs["subTask"]); res.json(docs["subTask"])})
    .catch(err => console.log(err))
    
}

getSubTask = (req, res) => {
    Task.findOne({subtaskID: req.params.subtask.id.subtaskID})
    .then(docs => {
        console.log(docs); res.json(docs)
    })
    .catch(err => console.log(err))
}

createSubTask = (req, res) => {
    const { body } = req
    const subtask = new Task();
    task.templateID = body.templateID
    task.userID = body.userID
    task.share = body.share
    task.name = body.name
    task.category = body.category
    task.status = body.status
    task.subTask = body.subTask

    subtask.save()
        .then(() => res.json({_id:`${subtask.id}`}))
        .catch(err => console.log(err))
}

updateSubTask = (req, res) => { 
    const { body } = req
    const subtask = {};
    task.templateID = body.templateID
    task.userID = body.userID
    task.share = body.share
    task.name = body.name
    task.category = body.category
    task.status = body.status
    task.subTask = body.subTask
    
    const query = {_id: req.params.id}

    Task.updateOne(query, subtask)
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteSubTask = (req, res) => {     
    Task.deleteOne({_id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getSubTasks, 
    getSubTask, 
    createSubTask, 
    updateSubTask, 
    deleteSubTask
}