const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const taskRouter = require("./routers/task.router");
const subtaskRouter = require("./routers/subtask.router");
const userRouter = require("./routers/user.router");


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/tasks', taskRouter.taskRouter);  
app.use('/api/subtasks', subtaskRouter.subtaskRouter);
app.use('/api/users', userRouter.userRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
   });


app.listen(port, () => console.log('Express server is running on port ', port));