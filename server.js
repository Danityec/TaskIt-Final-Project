const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors")
// const session = require("express-session")
const cookieParser = require("cookie-parser")
// const FileStore = require('session-file-store')(session)

const authLoginRouter = require("./routers/authLogin.router");
const taskRouter = require("./routers/task.router");
const subtaskRouter = require("./routers/subtask.router");
const userRouter = require("./routers/user.router");
const chatRouter = require("./routers/chat.router");
const reviewRouter = require("./routers/review.router");
const authMiddleware = require("./middleware/authentication")
const googleTaskRouter = require("./routers/googleTask.router");
// const User = require("./models/user");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser());


//
// const MongoStore = require('connect-mongo')(session);
// const mongoose = require('./db_connection')
//
// const sessionStore = new MongoStore({
//     mongooseConnection: mongoose.connection,
//     collection: 'sessions',
//     ttl: 1000 * 60 * 60 * 24
// })
//
// app.use(session({
//     secret: process.env.CLIENT_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: sessionStore,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24,// Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
//         secure: false
//     }
// }));

app.use('/authLogin', authLoginRouter.router);

app.use(authMiddleware.checkAuthenticated)

app.use('/api/googleTasks', googleTaskRouter.router);
app.use('/api/tasks', taskRouter.router);
app.use('/api/subtasks', subtaskRouter.router);
app.use('/api/users', userRouter.router);
app.use('/api/chats', chatRouter.router);
app.use('/api/reviews', reviewRouter.router);

app.use((req, res) => {
    res.status(500).send('Something is broken!');
});

app.listen(PORT, () => console.log('Express server is running on port ', PORT));