const express = require("express");
const mongoose = require("mongoose");

const Nember = require("../../models/Nember");
const router = express.Router();
//@route   GET /api/nembers/test
//@desc    test
//@access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "nembers" });
});

//@route   GET /api/nembers
//@desc    get all nembers
//@access  Public
router.get("/", (req, res) => {
  Nember.find()
    .then(nembers => {
      if (nembers) {
        return res.json(nembers);
      }
      res.status(400).json({ msg: "khong get dc" });
    })
    .catch(err => console.log(err));
});

//@route   POST /api/nembers
//@desc    them nember
//@access  Public
router.post("/", (req, res) => {
  const nemberParams = {};
  if (req.body.name) nemberParams.name = req.body.name;
  if (req.body.phone) nemberParams.phone = req.body.phone;
  const newNember = new Nember(nemberParams);
  newNember
    .save()
    .then(nember => {
      if (nember) {
        console.log("Lưu thành công");
        return res.json(nember);
      }
      res.status(400).json({ msg: "Luu that bai" });
    })
    .catch(err => console.log(err));
});
module.exports = router;
