const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//MiddleWare
app.use(express.json());

const blog = require("./routes/blog")
//Mount
app.use("/api/v1", blog);

const conncetWithDb = require("./config/database")
conncetWithDb();

//Start the server
app.listen(PORT, () => {
    console.log(`APP is started at PORT no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my Home Page</h1>`);
})