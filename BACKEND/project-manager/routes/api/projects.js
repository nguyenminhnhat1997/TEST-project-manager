const express = require("express");
const mongoose = require("mongoose");
const db = require("../../configs/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("Kết nối thành công với database"))
  .catch(err => console.log(err));
const Project = require("../../models/Project");
const router = express.Router();
//@route   GET /api/profiles
//@desc    test
//@access  Public
router.get("/", (req, res) => {
  res.json({ msg: "project" });
});

module.exports = router;
