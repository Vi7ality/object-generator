import { generateDataFromSchema } from "./generateDataFromSchema.mjs";
import { generateString } from "./generateString.mjs";

export function generateArray(schema, rootSchema) {
  const minItems = schema.minItems || 1;
  const maxItems = schema.maxItems || 5;
  const length = Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (schema.items) {
      result.push(generateDataFromSchema(schema.items, rootSchema));
    } else {
      result.push(generateString(schema));
    }
  }

  return result;
}
