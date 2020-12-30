const Task = require('../models/task');

getTasks = (req, res) => {
    Task.find({}).sort({_id: -1})

        .then(docs => {res.json(docs)})
        .catch(err => console.log(err))
}

getAllUserTasks = (req, res) => {    
    Task.find({userID: req.params.userID}).sort({_id: -1})
        .then(docs => { console.log(docs); res.json(docs) })
        .catch(err => console.log(err))
}

getAllTemplates = (req, res) => {   
    Task.find({status: null}).sort({_id: -1})
    .then(docs => {res.json(docs)})
    .catch(err => console.log(err))
},


getTask = (req, res) => {
    Task.findOne({_id: req.params.id})
        .then(docs => { res.json(docs)})
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
        task.share = null

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
        task.subTask = null

    task.save()
        .then(() => res.json({ _id: `${task.id}` }))
        .catch(err => console.log(err))
},

updateTask = (req, res) => {
    const { body } = req
    const task = {};


    if(body.templateID != '')
        task.templateID = body.templateID


    if(body.userID != '')
        task.userID = body.userID
    

    if(body.share != '')
        task.share = body.share
        
    if(body.name != ''){ 
        task.name = body.name
        
    if(body.category != '')
        task.category = body.category
        
    if(body.status != '')
        task.status = body.status


    if(body.subTask != '')
        task.subTask = body.subTask
        console.log("task.subTask", task.subTask)

    }

    const query = { _id: req.params.id }

    Task.updateOne(query, task)
        .then(() => res.json({id: `${req.params.id}` }))
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
    getAllUserTasks,
    getAllTemplates,
    createTask,
    updateTask,
    deleteTask
};