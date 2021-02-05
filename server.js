const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors")

const authLoginRouter = require("./routers/authLogin.router");
const taskRouter = require("./routers/task.router");
const subtaskRouter = require("./routers/subtask.router");
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const reviewRouter = require("./routers/review.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true, credentials: true }))

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.set('Content-Type', 'application/json');
//     next();
// });


app.use('/authLogin', authLoginRouter.router);
app.use('/api/tasks', taskRouter.router);
app.use('/api/subtasks', subtaskRouter.router);
app.use('/api/users', userRouter.router);
app.use('/api/chats', chatRouter.router);
app.use('/api/reviews', reviewRouter.router);

app.use((req, res, next) => {
    res.status(500).send('Something is broken!');
});

app.listen(PORT, () => console.log('Express server is running on port ', PORT));