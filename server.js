const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const routes = require("./routes");
const app = express();
const passport = require("./passport/setup")
const users = require("./routes/api/users");
const hangs = require("./routes/api/hangs")


const flash = require("connect-flash")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(routes);

mongoose
    .connect(
        (process.env.MONGODB_URI || "mongodb+srv://talmageluke:hangpassword@cluster0.jyodq.mongodb.net/hang_db?retryWrites=true&w=majority"),
        { useNewUrlParser: true }
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