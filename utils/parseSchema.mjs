import fs from "fs/promises";
export async function parseSchema(path) {
  const schema = await fs.readFile(path);
  return JSON.parse(schema);
}
