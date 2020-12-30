const { Router } = require('express');
const router = new Router(); 

const taskController = require('../controllers/task.ctrl');
const SubTaskController = require('../controllers/subtask.ctrl');

router.get('/', taskController.getTasks);         
router.get('/:id', taskController.getTask); 
router.get('/users/:userID', taskController.getAllUserTasks);  
router.get('/task/templates', taskController.getAllTemplates);      
router.post('/', taskController.createTask);  
//router.post('/:templateID', taskController.createTaskfromTemplate);         
router.put('/:id', taskController.updateTask);     
router.delete('/:id', taskController.deleteTask); 

router.get('/subtasks/:task', SubTaskController.getSubTasks);         
router.get('/subtasks/:task/:id', SubTaskController.getSubTask);      
router.post('/subtasks/:task', SubTaskController.createSubTask);         
router.put('/subtasks/:task/:id', SubTaskController.updateSubTask);     
router.delete('/subtasks/:task/:id', SubTaskController.deleteSubTask);  

module.exports = { router };