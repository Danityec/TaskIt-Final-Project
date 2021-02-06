const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors")
const session = require("express-session")

const authLoginRouter = require("./routers/authLogin.router");
const taskRouter = require("./routers/task.router");
const subtaskRouter = require("./routers/subtask.router");
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const reviewRouter = require("./routers/review.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(cors({ origin: true, credentials: true }))

// Session
app.use(session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false
  }))

app.use('/authLogin', authLoginRouter.router);

// every time = check if admin or user

app.use('/api/tasks', taskRouter.router);
app.use('/api/subtasks', subtaskRouter.router);
app.use('/api/users', userRouter.router);
app.use('/api/chats', chatRouter.router);
app.use('/api/reviews', reviewRouter.router);

app.use((req, res) => {
    res.status(500).send('Something is broken!');
});

app.listen(PORT, () => console.log('Express server is running on port ', PORT));