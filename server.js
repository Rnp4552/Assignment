require("dotenv").config({
    path : "./config/config.env"
});
require("./db/conn");

const route = require("./routes/route");
const express = require("express");
const app = express();
const port = process.env.port || 5050;

app.use("/api/user", route);
app.set("view engine", "ejs");

app.listen(port , () => {
    console.log(`Server is running on ${port} port number`);
});