//#region Requires
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const studentsRouter = require("./Routes/Students");
const coursessRouter = require("./Routes/Courses");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//#endregion

//#region Port Intialization
const PORT = process.env.PORT || 7000;
//#endregion

//#region Using Routers
app.use("/api/students", studentsRouter);
app.use("/api/courses", coursessRouter);
//#endregion

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
