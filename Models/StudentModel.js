const mongoose = require("./DbModel.Js");

const studentSchema = new mongoose.Schema({
  _id: { type: Number },
  Name: { type: String },
  age: { type: Number },
  Department: { type: String },
  Courses: [{ type: Number }],
});
const student = mongoose.model("Students", studentSchema);

let Funtions = {
  getAllStudents: async () => {
    const Students = await student.find({});
    return Students;
  },
  addStudent: async (data) => {
    const lastID = await student.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var id = lastID ? lastID._id : 0;
    data._id = id + 1;
    const newStudent = await new student(data);
    await newStudent.save();
    return newStudent;
  },
  deleteStudent: async (id) => {
    await student.findByIdAndDelete(id);
  },
  updatedStudent: async (id, data) => {
    const updatedStudent = await student.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return updatedStudent;
  },
  getStudent: async (id) => {
    const matchedStudent = await student.find({ _id: id });
    return matchedStudent;
  },
};
module.exports = Funtions;
