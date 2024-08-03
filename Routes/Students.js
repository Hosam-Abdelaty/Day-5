const express = require("express");
const router = new express.Router();
const studentsController = require("../Controllers/Students");

router.get("/", studentsController.getAllStudents);

router.get("/:id", studentsController.getStudentByID);

router.delete("/:id", studentsController.DeleteStudentByID);

router.put("/:id", studentsController.updateStudentByID);

router.post("/", studentsController.addNewStudent);

module.exports = router;
