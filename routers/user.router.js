const { Router } = require('express');
const{ userController} = require('../controllers/user.ctrl');

const userRouter = new Router(); 

taskRouter.get('/',userController.getUsers);         
taskRouter.get('/:id',userController.getUser);      
taskRouter.post('/',userController.createUser);         
taskRouter.put('/:id',userController.updatUser);     
taskRouter.delete('/:id',userController.deleteUser);  


module.exports = { userRouter };