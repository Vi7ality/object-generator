// const generateDataFromSchema = require("./generateDataFromSchema");

import { generateBoolean } from "./generateBoolean.mjs";
import { generateDataFromSchema } from "./generateDataFromSchema.mjs";

export function generateObject(schema, rootSchema) {
  const result = {};
  const required = schema.required || [];

  for (const key in schema.properties) {
    const propertySchema = schema.properties[key];
    result[key] = generateDataFromSchema(propertySchema, rootSchema);
    if (required.includes(key) || "default" in propertySchema) {
      result[key] = generateDataFromSchema(propertySchema, rootSchema);
    } else if (generateBoolean()) {
      result[key] = generateDataFromSchema(propertySchema, rootSchema);
    }
  }

  return result;
}

// module.exports = generateObject;
