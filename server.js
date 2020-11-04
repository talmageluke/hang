const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
const passport = require("./passport/setup")
const users = require("./routes/api/users");
const hangs = require("./routes/api/hangs")
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

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
        (process.env.MONGODB_URI || "mongodb+srv://root:password1!@cluster0.suypg.mongodb.net/hang_db?retryWrites=true&w=majority"),
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

app.listen(PORT, () => console.log(`Server running on PORT ${PORT} !`));