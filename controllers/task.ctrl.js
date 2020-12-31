const Task = require('../models/task');

getTasks = (req, res) => {
    if (req.query.userID) {
        Task.find({ userID: req.query.userID }).sort({ _id: -1 })
        .then(docs => {res.json(docs) })
        .catch(err => console.log(err))
    }

    if (req.query.templates) {
        Task.find({status: null}).sort({ _id: -1 })
        .then(docs => {res.json(docs) })
        .catch(err => console.log(err))
    }

    else {
        Task.find({}).sort({ _id: -1 })
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
    }

}


getTask = (req, res) => {              
    Task.findOne({ _id: req.params.id })
    .then(docs => { res.json(docs) })
    .catch(err => console.log(err))
},


    createTask = (req, res) => {
        const { body } = req

        const task = new Task();
        if (body.templateID != '')
            task.templateID = body.templateID
        else
            task.templateID = null

        if (body.userID != '')
            task.userID = body.userID
        else
            task.userID = null

        if (body.share != '')
            task.share = body.share
        else
            task.share = []

        if (body.name != '')
            task.name = body.name
        else
            task.name = null

        if (body.category != '')
            task.category = body.category
        else
            task.category = null

        if (body.status != '')
            task.status = body.status
        else
            task.status = null

        if (body.subTask != '')
            task.subTask = body.subTask
        else
            task.subTask = []

        task.save()
            .then(() => res.json({ _id: `${task.id}` }))
            .catch(err => console.log(err))
    },

    createTaskfromTemplate = (req, res) => {
        Task.findOne({ templateID: req.params.templateID })
            .then(docs => {
                const { body } = req
                const task = new Task();

                task.userID = body.userID
                task.status = 'false'
                task.share = []
                task.templateID = req.params.templateID
                task.name = docs["name"]
                task.category = docs["category"]
                task.subTask = docs["subTask"]

                task.save()
                    .then(() => res.json({ _id: `${task.id}` }))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    },

    updateTask = (req, res) => {
        const { body } = req
        const task = {};

        if (body.templateID != '' && body.templateID != null)
            task.templateID = body.templateID


        if (body.userID != '' && body.userID != null)
            task.userID = body.userID


        if (body.share != '' && body.share != null && body.share != [])
            task.share = body.share

        if (body.name != '' && body.name != null)
            task.name = body.name

        if (body.category != '' && body.category != null)
            task.category = body.category

        if (body.status != '' && body.status != null)
            task.status = body.status


        if (body.subTask != '' && body.subTask != null && body.subTask != [])
            task.subTask = body.subTask



        const query = { _id: req.params.id }

        Task.updateOne(query, task)
            .then(() => res.json({ id: `${req.params.id}` }))
            .catch(err => console.log(err))
    },

    deleteTask = (req, res) => {
        Task.deleteOne({ _id: req.params.id })
            .then(() => res.json({ id: `${req.params.id}` }))
            .catch(err => console.log(err))
    },

    module.exports = {
        getTasks,
        getTask,
        createTask,
        createTaskfromTemplate,
        updateTask,
        deleteTask
    };