const express = require("express");
const mongoose = require("mongoose");
const Project = require("../../models/Project");
const Nember = require("../../models/Nember");
const router = express.Router();
//@route   GET /api/projects/test
//@desc    test
//@access  Public
router.get("/test", (req, res) => {
  res.json({ msg: "project" });
});

//@route   GET /api/projects
//@desc    get all project
//@access  Public
router.get("/", (req, res) => {
  Project.find()
    .then(projects => {
      if (projects) {
        return res.json(projects);
      }
      res.status(400).json({ msg: "Ko get dc" });
    })
    .catch(err => console.log(err));
});

//@route   POST /api/projects
//@desc    thêm project
//@access  Public
router.post("/", (req, res) => {
  const projectParams = {};
  if (req.body.name) projectParams.name = req.body.name;
  if (req.body.dec) projectParams.dec = req.body.dec;
  const newProject = new Project(projectParams);
  newProject
    .save()
    .then(project => {
      console.log("Lưu thành công");
      return res.json(project);
    })
    .catch(err => console.log(err));
});
//@route   GET /api/projects/:id_project
//@desc    xem chi tiết project
//@access  Public
router.get("/:id_project", (req, res) => {
  Project.findOne({ _id: req.params.id_project })
    .then(project => {
      if (project) {
        return res.json(project);
      } else {
        res.status(404).json({ msg: "Khong tin thay project" });
      }
    })
    .catch(err => console.log(err));
});

//@route   DELETE /api/projects/:id_delete
//@desc    xem chi tiết project
//@access  Public
router.delete("/:id_delete", (req, res) => {
  Project.findById(req.params.id_delete)
    .then(project => {
      if (project) {
        project
          .remove()
          .then(() => res.json({ msg: "Xoa thanh cong" }))
          .catch(err => console.log(err));
      }
      return res.status(404).json({ msg: "Khong tim thay projec voi id tren" });
    })
    .catch(err => console.log(err));
});
//@route   POST /api/projects/:id_project
//@desc    thêm user vào project
//@access  Public
router.get("/:id_project/:id_nember", (req, res) => {
  Nember.findById(req.params.id_nember)
    .then(nember => {
      var idNember = nember.id;
      Project.findById(req.params.id_project).then(project => {
        const newUser = {
          nember: idNember
        };
        if (
          project.listNember.filter(nem => nem.nember.toString() === idNember)
            .length === 0
        ) {
          project.listNember.unshift(newUser);
          project.save().then(project => {
            return res.json(project);
          });
        } else {
          res.status(400).json({ smg: "Nember này đã tồn tại trong list" });
        }
      });
    })
    .catch(err => console.log("nember khong ton tai"));
});
module.exports = router;
