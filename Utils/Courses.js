const Ajv = require("ajv");
const ajv = new Ajv();
const CourseSchemaAjv = {
  type: "object",
  properties: {
    _id: { type: "integer" },
    Name: { type: "string", minLength: 2 },
    TotalGrade: { type: "integer", minimum: 10, maximum: 100 },
  },
  required: ["Name", "TotalGrade"],
  additionalProperties: false,
};

module.exports = ajv.compile(CourseSchemaAjv);
