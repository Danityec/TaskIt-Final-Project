const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')
const fs = require('fs')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const morgan = require('morgan')
const Request = require("request");

const authLoginRouter = require("./routers/authLogin.router");
const taskRouter = require("./routers/task.router");
const subtaskRouter = require("./routers/subtask.router");
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const reviewRouter = require("./routers/review.router");
const authMiddleware = require("./middleware/authentication")

const logStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: true, credentials: true}))
app.use(cookieParser());
app.use(morgan('tiny', {stream: logStream}))


app.get('/quotes', (req, res) => {
    Request.get("https://zenquotes.io/api/random", (error, response, body) => {
        if (error) res.sendStatus(400)
        else res.json(JSON.parse(body));
    });
})

app.use('/authLogin', authLoginRouter.router);

app.use('/api/tasks', authMiddleware.checkAuthenticated, taskRouter.router);
app.use('/api/subtasks', authMiddleware.checkAuthenticated, subtaskRouter.router);
app.use('/api/users', authMiddleware.checkAuthenticated, userRouter.router);
app.use('/api/chats', authMiddleware.checkAuthenticated, chatRouter.router);
app.use('/api/reviews', authMiddleware.checkAuthenticated, reviewRouter.router);

app.use('/favicon.ico', ((req, res) => {
    res.sendStatus(200)
}));

app.use((req, res) => {
    res.status(500).send('Something is broken!');
});

app.listen(PORT, () => console.log('Express server is running on port ', PORT));