const { Router } = require('express');
const{ taskDBController} = require('../controllers/task.ctrl');

const taskRouter = new Router(); 


taskRouter.get('/',taskDBController.getTasks);         
taskRouter.get('/:id',taskDBController.getTask);      
taskRouter.post('/',taskDBController.postTask);         
taskRouter.put('/:id',taskDBController.updatTask);     
taskRouter.delete('/:id',taskDBController.deleteTask);  


module.exports = { taskRouter };