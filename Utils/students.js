const Ajv = require("ajv");
const ajv = new Ajv();
const StudentSchema = {
  type: "object",
  properties: {
    _id: { type: "integer" },
    Name: { type: "string", pattern: "^[a-zA-Z]{2,}$" },
    Age: { type: "integer", minimum: 15, maximum: 30 },
    Department: {
      type: "string",
      enum: ["CS", "IT", "OS"],
      minLength: 2,
      maxLength: 2,
    },
    Courses: {
      type: "array",
      items: { type: "integer" },
    },
  },
  required: ["Name", "Department"],
  additionalProperties: false,
};
module.exports = ajv.compile(StudentSchema);
