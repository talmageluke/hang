const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();
const passport = require("./passport/setup")
const users = require("./routes/api/users");
const hangs = require("./routes/api/hangs")
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const flash = require("connect-flash")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);


mongoose
    .connect(
        (process.env.MONGODB_URI || "mongodb+srv://root:password1!@fitnesstracker.9clmu.mongodb.net/hang_db?retryWrites=true&w=majority"),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(require('express-session')({ secret: "sillystring", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session())
app.use(flash())
// Routes
app.use("/api/users", users);
app.use("/api/hang", hangs);

app.listen(port, () => console.log(`Server running on port ${port} !`));