const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.listen(3001,()=>{
    console.log("Server running on 3001");
});