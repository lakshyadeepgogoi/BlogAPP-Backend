const mongoose = require("mongoose");


require("dotenv").config();

const conncetWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB Connect Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = conncetWithDb;