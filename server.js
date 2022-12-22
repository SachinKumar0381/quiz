const express = require("express");
const cors = require("cors");
const QstRoute = require("./route/qst.route");
const connection = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/",QstRoute);

app.listen(process.env.PORT || 8080,async()=>{
    await connection;
    console.log("server started")
})