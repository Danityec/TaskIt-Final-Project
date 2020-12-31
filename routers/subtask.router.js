const router = new Router(); 

const SubTaskController = require('../controllers/subtask.ctrl');

router.get('/subtasks/:task', SubTaskController.getSubTasks);         
router.get('/subtasks/:task/:id', SubTaskController.getSubTask);      
router.post('/subtasks/:task', SubTaskController.createSubTask);         
router.put('/subtasks/:task/:id', SubTaskController.updateSubTask);     
//router.delete('/subtasks/:task/:id', SubTaskController.deleteSubTask);  

module.exports = { router };