

import { generateAnyOf } from "./generateAnyOf.mjs";
import { generateArray } from "./generateArray.mjs";
import { generateBoolean } from "./generateBoolean.mjs";
import { generateEnum } from "./generateEnum.mjs";
import { generateInteger } from "./generateInteger.mjs";
import { generateObject } from "./generateObject.mjs";
import { generateString } from "./generateString.mjs";
import { handleRef } from "./handleRef.mjs";

export function generateDataFromSchema(schema, rootSchema = schema) {
  if (!schema || typeof schema !== "object") {
    throw new Error(`Invalid schema ${schema}`);
  }

  if (schema.$ref) {
    return handleRef(schema, rootSchema);
  }

  if (schema.anyOf) {
    return generateAnyOf(schema, rootSchema);
  }

  if (schema.enum) {
    return generateEnum(schema);
  }

  switch (schema.type) {
    case "object":
      return generateObject(schema, rootSchema);
    case "array":
      return generateArray(schema, rootSchema);
    case "string":
      return generateString(schema);
    case "integer":
      return generateInteger(schema);
    case "boolean":
      return generateBoolean();
    default:
      throw new Error(`Unsupported type: ${schema.type}`);
  }
}

// module.exports = generateDataFromSchema;
