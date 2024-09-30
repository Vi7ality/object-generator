import { generateDataFromSchema } from "./generateDataFromSchema.mjs";

export function generateAnyOf(schema, rootSchema) {
  const randomIndex = Math.floor(Math.random() * schema.anyOf.length);
  const chosenSchema = schema.anyOf[randomIndex];

  if (chosenSchema.type === "null") {
    return null;
  }

  return generateDataFromSchema(chosenSchema, rootSchema);
}
