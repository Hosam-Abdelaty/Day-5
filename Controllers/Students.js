const studentsModel = require("../Models/StudentModel");
let studentsValidation = require("../Utils/students");
const functions = {
  getAllStudents: async (req, res) => {
    const students = await studentsModel.getAllStudents();
    res.json(students);
  },
  getStudentByID: async (req, res) => {
    var id = req.params.id;
    const student = await studentsModel.getStudent(id);
    res.json(student);
  },
  DeleteStudentByID: async (req, res) => {
    var id = req.params.id;
    await studentsModel.deleteStudent(id);
    var data = await studentsModel.getAllStudents();
    res.json({ message: "Student Deleted ", Data: data });
  },
  updateStudentByID: async (req, res) => {
    var id = req.params.id;
    const newStudent = req.body;
    if (studentsValidation(newStudent)) {
      var updatedStudent = await studentsModel.updatedStudent(id, newStudent);
      res.json({ message: "update Done", data: updatedStudent });
    } else {
      res.json({ message: "ValidationError", Data: newStudent });
    }
  },
  addNewStudent: async (req, res) => {
    var data = req.body;
    var result = studentsValidation(data);
    console.log(result);
    if (studentsValidation(data)) {
      var newStudent = await studentsModel.addStudent(data);
      res.json({ message: "added done", Data: newStudent });
    } else {
      res.json({ message: "ValidationErrorrrrrrrrrrrrrrrrrrr", Data: data });
    }
  },
};
module.exports = functions;
