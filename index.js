import path from "path";
const schemaPath = path.resolve("./schemas/json-schema.json");
import { generateDataFromSchema } from "./utils/generateDataFromSchema.mjs";
import { parseSchema } from "./utils/parseSchema.mjs";

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
