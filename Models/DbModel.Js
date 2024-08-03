const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Task5");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Erorrrrrrrrrrr");
});
db.once("open", () => {
  console.log("Conected To Database");
});
module.exports = mongoose;
