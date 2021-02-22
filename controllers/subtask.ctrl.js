const Task = require('../models/task');

getSubTasks = (req, res) => {
    Task.findOne({ _id: req.params.task })
        .then(docs => res.json(docs["subTask"]))
        .catch(err => console.log(err))
}

getSubTask = (req, res) => {
    Task.findOne({ _id: req.params.task })
        .then(docs => res.json(docs.subTask.id(req.params.id)))
        .catch(err => console.log(err))
}

createSubTask = (req, res) => {
    const { body } = req

    if (body.name == null || body.name === "") {
        res.sendStatus(400)
    }

    Task.updateOne({ _id: req.params.task }, {
        $push: {
            subTask: {
                name: body.name,
                completed: false
            }
        }
    })

        .then(() => {
            Task.findOne({ _id: req.params.task })
                .then(docs => res.json(docs))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

updateSubTask = (req, res) => {
    const {body} = req
    const subtask = {};

    if (body.name !== '' && body.name != null) {
        subtask.name = body.name
    }

    if (body.completed === true || body.completed === false) {
        subtask.completed = body.completed
    }

    //
    // Task.updateOne({_id: req.params.id}, task)
    //     .then(() => {
    //         Task.findOne({_id: req.params.id})
    //             .then(docs => res.json(docs))
    //             .catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))
    //
    //

    //
    // const { body } = req
    // let completed = 'false'
    //
    // if (body.name !== '' && body.name != null) {
    //     name = body.name
    // }
    // // if (body.name == null || body.name === "") {
    // //     res.sendStatus(400)
    // // }
    // if (body.completed === true || body.completed === false) {
    //     completed = body.completed
    // }

    Task.findOne({ _id: req.params.task })
        .then(docs => {
            docs.subTask.id(req.params.id).set({
                completed: subtask.completed,
                name: subtask.name
            })
            docs.save()
            res.json(docs)
        })
        .catch(err => console.log(err))
}

deleteSubTask = (req, res) => {
    Task.findOne({ _id: req.params.task })
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