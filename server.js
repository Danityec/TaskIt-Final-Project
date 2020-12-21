const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const taskRouter = require("./routers/routerTask");
const subtaskRouter = require("./routers/routerSubtask");


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/task', taskRouter.taskRouter);   // מי שיקבל את ('/api/restaurant) ידע לאיזה ראוטר ללכת
app.use('/api/subtask', subtaskRouter.subtaskRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
   });


app.listen(port, () => console.log('Express server is running on port ', port));