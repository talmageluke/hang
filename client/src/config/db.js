const mongoose = require("mongoose");



mongoose
    .connect(
        (process.env.MONGODB_URI || "mongodb+srv://talmageluke:hangpassword@cluster0.jyodq.mongodb.net/hang_db?retryWrites=true&w=majority"),
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


const MONGOURI = "mongodb+srv://talmageluke:hangpassword@cluster0.jyodq.mongodb.net/hang_db?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;