const Task = require('../models/task');


getSubTasks = (req, res) => {
    Task.findOne({ _id: req.params.task })
        .then(docs => { (docs["subTask"]); res.json(docs["subTask"]) })
        .catch(err => console.log(err))

}

getSubTask = (req, res) => {
    Task.findOne({ _id: req.params.task })
        .then(docs => {

            subTaskArray = docs["subTask"]
            subTaskArray.forEach(subtask => {
                if (subtask["_id"] == req.params.id)
                    res.json(subtask)
            });
            res.json({})

        })
        .catch(err => console.log(err))
}

createSubTask = (req, res) => {
    const { body } = req

    if(body.name == null || body.name == "")
        res.json(null)

    Task.updateOne({ _id: req.params.task }, {
        $push: { subTask: { 
            name: body.name,
            completed: false } }
    })
        .then(() => res.json({ id: `${req.params.task}` }))
        .catch(err => console.log(err))
}

updateSubTask = (req, res) => {
    const { body } = req

    if(body.name == null || body.name == "")
        res.json(null)

    Task.updateOne({ _id: req.params.task }, {
        $push: { subTask: { 
            name: body.name,
            completed: false } }
    })
        .then(() => res.json({ id: `${req.params.task}` }))
        .catch(err => console.log(err))
}

deleteSubTask = (req, res) => {
}

module.exports = {
    getSubTasks,
    getSubTask,
    createSubTask,
    updateSubTask,
    deleteSubTask,
}