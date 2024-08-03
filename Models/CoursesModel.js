const mongoose = require("./DbModel.Js");

const CourseSchema = new mongoose.Schema({
  _id: { type: Number },
  Name: { type: String },
  totalGrade: { type: Number },
});
const course = mongoose.model("Courses", CourseSchema);

let Funtions = {
  getAllCourses: async () => {
    const courses = await course.find({});
    return courses;
  },
  addCourse: async (data) => {
    const lastID = await course.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var id = lastID ? lastID._id : 0;
    data._id = id + 1;
    var newCourse = await new course(data);
    await newCourse.save();
    return newCourse;
  },
  deleteCourse: async (id) => {
    await course.findByIdAndDelete(id);
  },
  updateCourses: async (id, data) => {
    const updatedCourse = await course.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return updatedCourse;
  },
  getCourse: async (id) => {
    const matchCoures = await course.find({ _id: id });
    return matchCoures;
  },
};
module.exports = Funtions;
