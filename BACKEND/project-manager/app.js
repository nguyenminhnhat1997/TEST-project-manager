const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const nembersRouter = require("./routes/api/nembers");
const projectsRouter = require("./routes/api/projects");
const db = require("./configs/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Kết nối thành công với database"))
  .catch(err => console.log(err));
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/nembers", nembersRouter);
app.use("/api/projects", projectsRouter);

module.exports = app;
