const Task = require('../models/task');


getSubTasks = (req, res) => {
    Task.findOne({ _id: req.params.task })
    .then(docs => {(docs["subTask"]); res.json(docs["subTask"])})
    .catch(err => console.log(err))
    
}

getSubTask = (req, res) => {
    Task.findOne({ _id: req.params.task })
    .then(docs => {

        subTaskArray = docs["subTask"]
        subTaskArray.forEach(subtask => {
            if (subtask["subtaskID"] == req.params.id)
                res.json(subtask) 
        });
        res.json({})

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

async function updateSubTask(req, res){ 

    const subtask = await Task.findOne({ _id:  req.params.task  })
    const subTask = subtask.subTask
    console.log(subTask)
    console.log(Array.isArray(subTask)) // true
     const { body } = req
    
    subtask.subTask.push({
        "name": body.name,
        "status": body.status
    })


    // Task.findOne({ _id: req.params.task })
    //     .then(docs => {
    //         const { body } = req
    //         const subtask = {};
    //         subtask.name = body.name
    //         subtask.status= body.status
    //         console.log("subtask : ",subtask)

    //         let count, saved = 0;
    //         subTaskArray = docs["subTask"]
    //         console.log("subTaskArray : ",subTaskArray)

    //         subTaskArray.forEach(element => {
    //             console.log("element : ",element)
    //             if (element["subtaskID"] == req.params.id)
    //                 {
    //                     count+=1
    //                     //res.json(element)   
    //                 }
    //         });
    //         subTaskArray.set('name', () =>subtask.name )

    //         //subTaskArray.status =subtask.status
    //         res.json({})
    //     })
    //     .catch(err => console.log(err))
}


async function deleteSubTask(req, res){     
    Task.findOne({ _id: req.params.task })
    .then(docs => {
        subTaskArray = docs["subTask"]
        let count, saved = 0;
        subTaskArray.forEach(subtask => {
            count+=1
            if (subtask["subtaskID"] == req.params.id)
                saved = count   
        });
        subTaskArray.splice(saved,1)
        updatetoDeleteSubtask(subTaskArray, req.params.task)
        console.log("place_one : ")
        res.json({})
       
    })
    .catch(err => console.log(err))
}

updatetoDeleteSubtask = (subTaskArray, task_id) => {
    console.log("place_two : ")
    return new Promise(resolve => {

    console.log("after fine one befor update one subTaskArray : ",subTaskArray)
    Task.updateOne({ _id: task_id}, { $set: {subTask:  subTaskArray} })
    .then(docs => {console.log("place_3 : "); resolve(true)})
    .catch(err => console.log(err))})

}


module.exports = { 
    getSubTasks, 
    getSubTask, 
    createSubTask, 
    updateSubTask, 
    deleteSubTask
}