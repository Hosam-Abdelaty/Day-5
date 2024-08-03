const coursesModel = require("../Models/CoursesModel");
const coursesValid = require("../Utils/Courses");

const functions = {
  getAllCourses: async (req, res) => {
    var Courses = await coursesModel.getAllCourses();
    res.json(Courses);
  },
  getCourseByID: async (req, res) => {
    var id = req.params.id;
    var Course = await coursesModel.getCourse(id);
    res.json(Course);
  },
  DeleteCourseByID: async (req, res) => {
    var id = req.params.id;
    await coursesModel.deleteCourse(id);
    var data = await coursesModel.getAllCourses();
    res.json({ message: "Course Deleted ", Data: data });
  },
  updateCourseByID: async (req, res) => {
    var id = req.params.id;
    var newCourse = req.body;
    if (coursesValid(newCourse)) {
      var updatedCourse = await coursesModel.updateCourses(id);
      res.json({ message: "update Done", data: updatedCourse });
    } else {
      res.json({ message: "ValidationError" });
    }
  },
  addNewCourse: async (req, res) => {
    var data = req.body;
    if (coursesValid(data)) {
      var newCoru = await coursesModel.addCourse(data);
      res.json({ message: "added done", Data: newCoru });
    } else {
      res.json({ message: "ValidationError" });
    }
  },
};
module.exports = functions;
