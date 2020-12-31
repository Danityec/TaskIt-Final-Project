const { Router } = require('express');
const router = new Router(); 

const taskController = require('../controllers/task.ctrl');

router.get('/', taskController.getTasks);         
router.get('/:id', taskController.getTask);      
router.post('/', taskController.createTask);  
router.post('/:templateID', taskController.createTaskfromTemplate);         
router.put('/:id', taskController.updateTask);     
router.delete('/:id', taskController.deleteTask); 



module.exports = { router };