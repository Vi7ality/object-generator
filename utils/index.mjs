// const generateDataFromSchema = require("./generateDataFromSchema");
// const generateAnyOf = require("./generateAnyOf");
// const generateInteger = require("./generateInteger");
// const generateArray = require("./generateArray");
// const generateBoolean = require("./generateBoolean");
// const generateEnum = require("./generateEnum");
// const generateObject = require("./generateObject");
// const generateString = require("./generateString");
// const parseSchema = require("./parseSchema");

// console.log("utils", typeof generateDataFromSchema);

// module.exports = {
//   generateDataFromSchema,
//   generateAnyOf,
//   generateInteger,
//   generateArray,
//   generateBoolean,
//   generateEnum,
//   generateObject,
//   generateString,
//   parseSchema,
// };
import { generateDataFromSchema } from "./generateDataFromSchema.mjs";
import { generateAnyOf } from "./generateAnyOf.mjs";
import { generateInteger } from "./generateInteger.mjs";
import { generateArray } from "./generateArray.mjs";
import { generateBoolean } from "./generateBoolean.mjs";
import { generateEnum } from "./generateEnum.mjs";
import { generateObject } from "./generateObject.mjs";
import { generateString } from "./generateString.mjs";
import { parseSchema } from "./parseSchema.mjs";

export {
  generateAnyOf,
  generateBoolean,
  generateArray,
  generateDataFromSchema,
  generateEnum,
  generateInteger,
  generateObject,
  generateString,
  parseSchema,
};
