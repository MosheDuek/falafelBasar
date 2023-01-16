const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path')
const apiRouter = require("./routes/api/api")
const imgsRouter = require("./routes/imgs/imgs")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

app.use("/api",apiRouter)
app.use("/imgs",imgsRouter)
app.use("*",(req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
})



module.exports = app;