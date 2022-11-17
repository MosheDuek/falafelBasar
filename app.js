const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apiRouter = require("./routes/api/api")
const imgsRouter = require("./routes/imgs/imgs")
const app = express();
const cors = require("cors")

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api",apiRouter)
app.use("/imgs",imgsRouter)

module.exports = app;
