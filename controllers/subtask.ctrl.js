const Task = require('../models/task');

getSubTasks = (req, res) => {
    Task.findOne({_id: req.params.task})
        .then(docs => {
            res.json(docs["subTask"])
        })
        .catch(err => console.log(err))
}

getSubTask = (req, res) => {
    Task.findOne({_id: req.params.task})
        .then(docs => res.json(docs.subTask.id(req.params.id)))
        .catch(err => console.log(err))
}

createSubTask = (req, res) => {
    const {body} = req

    if (body.name == null || body.name == "") {
        res.sendStatus(400)
    }

    Task.updateOne({_id: req.params.task}, {
        $push: {
            subTask: {
                name: body.name,
                completed: false
            }
        }
    })
        .then(() => res.json({id: `${req.params.task}`}))
        .catch(err => console.log(err))
}

updateSubTask = (req, res) => {
    const {body} = req
    let completed = 'false'

    if (body.name == null || body.name == "") {
        res.sendStatus(400)
    }
    if (body.completed == true || body.completed == false) {
        completed = body.completed
    }

    Task.findOne({_id: req.params.task})
        .then(docs => {
            docs.subTask.id(req.params.id).set({
                name: body.name,
                completed: completed
            })
            docs.save()
            res.json(docs)
        })
        .catch(err => console.log(err))
}

deleteSubTask = (req, res) => {
    Task.findOne({_id: req.params.task})
        .then(docs => {
            docs.subTask.id(req.params.id).remove()
            docs.save()
            res.json(docs)
        })
        .catch(err => console.log(err))
}

module.exports = {
    getSubTasks,
    getSubTask,
    createSubTask,
    updateSubTask,
    deleteSubTask
}