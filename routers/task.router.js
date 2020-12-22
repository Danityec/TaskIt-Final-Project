const { Router } = require('express');
const{ taskController} = require('../controllers/task.ctrl');

const taskRouter = new Router(); 

taskRouter.get('/',taskController.getTasks);         
taskRouter.get('/:id',taskController.getTask);      
taskRouter.post('/',taskController.createTask);         
taskRouter.put('/:id',taskController.updatTask);     
taskRouter.delete('/:id',taskController.deleteTask);  


module.exports = { taskRouter };