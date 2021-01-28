const Task = require('../models/task');

getTasks = (req, res) => {
    if (req.query.userID) {
        Task.find({userID: req.query.userID}).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else if (req.query.templates) {
        Task.find({completed: null}).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        Task.find({}).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getTask = (req, res) => {
    Task.findOne({_id: req.params.id})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createTask = (req, res) => {
    const {body} = req

    const task = new Task();
    if (body.templateID != '') {
        task.templateID = body.templateID
    } else {
        task.templateID = null
    }

    if (body.userID != '') {
        task.userID = body.userID
    } else {
        task.userID = null
    }

    if (body.sharedWith != '') {
        task.sharedWith = body.sharedWith
    } else {
        task.sharedWith = []
    }

    if (body.name == null || body.name == "") {
        res.sendStatus(400)
    } else {
        task.name = body.name
    }

    if (body.category == null || body.category == "") {
        res.sendStatus(400)
    } else {
        task.category = body.category
    }

    if (body.completed != '') {
        task.completed = body.completed
    } else if(task.userID == null ){
        task.completed = null
    } else {
        task.completed = 'false'
    }

    if (body.subTask != '') {
        task.subTask = body.subTask
    } else {
        task.subTask = []
    }

    task.save()
        .then(() => res.json({_id: task.id}))
        .catch(err => console.log(err))
}

createTaskFromTemplate = (req, res) => {
    Task.findOne({templateID: req.params.templateID})
        .then(docs => {
            const {body} = req
            const task = new Task();

            task.userID = body.userID
            task.completed = 'false'
            task.sharedWith = []
            task.templateID = req.params.templateID
            task.name = docs["name"]
            task.category = docs["category"]
            task.subTask = docs["subTask"]

            task.save()
                .then(() => res.json({_id: `${task.id}`}))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

updateTask = (req, res) => {
    const {body} = req
    const task = {};

    if (body.templateID != '' && body.templateID != null) {
        task.templateID = body.templateID
    }

    if (body.userID != '' && body.userID != null) {
        task.userID = body.userID
    }

    if (body.sharedWith != '' && body.sharedWith != null && body.sharedWith != []) {
        task.sharedWith = body.sharedWith
    }

    if (body.name != '' && body.name != null) {
        task.name = body.name
    }

    if (body.category != '' && body.category != null) {
        task.category = body.category
    }

    if (body.completed == true || body.completed == false) {
        task.completed = body.completed
    }

    if (body.subTask != '' && body.subTask != null && body.subTask != []) {
        task.subTask = body.subTask
    }

    Task.updateOne({_id: req.params.id}, task)
        .then(() => res.json({id: `${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteTask = (req, res) => {
    Task.deleteOne({_id: req.params.id})
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    createTaskFromTemplate,
    updateTask,
    deleteTask
}