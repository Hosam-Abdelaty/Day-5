const express = require("express");
const router = new express.Router();
const coursesController = require("../Controllers/Courses");

router.get("/", coursesController.getAllCourses);

router.get("/:id", coursesController.getCourseByID);

router.delete("/:id", coursesController.DeleteCourseByID);

router.put("/:id", coursesController.updateCourseByID);

router.post("/", coursesController.addNewCourse);

module.exports = router;
