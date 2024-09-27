// const path = require("path");
import path from "path";
const schemaPath = path.resolve("./json-schema.json");
// const { parseSchema, generateDataFromSchema } = require("./utils");
// const parseSchema = require("./utils/parseSchema.mjs");

// const generateDataFromSchema = require("./utils/generateDataFromSchema");
import { generateDataFromSchema } from "./utils/generateDataFromSchema.mjs";
import { parseSchema } from "./utils/parseSchema.mjs";

console.log(typeof parseSchema, typeof generateDataFromSchema);

async function main() {
  try {
    const schema = await parseSchema(schemaPath);
    const generatedData = generateDataFromSchema(schema);

    console.log("Generated data:", generatedData);
  } catch (error) {
    console.error("Error reading schema:", error);
  }
}

main();
