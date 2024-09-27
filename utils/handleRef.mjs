// const generateDataFromSchema = require("./generateDataFromSchema");

import { generateDataFromSchema } from "./generateDataFromSchema.mjs";

export function handleRef(schema, rootSchema) {
  const ref = schema.$ref;

  if (ref.startsWith("#")) {
    const path = ref.slice(1);
    let resolvedSchema = rootSchema;

    if (rootSchema.definitions && rootSchema.definitions[path]) {
      resolvedSchema = rootSchema.definitions[path];
    } else {
      for (const key of path) {
        if (key === "") continue;
        resolvedSchema = resolvedSchema[key];
        if (!resolvedSchema) {
          throw new Error(`Could not resolve $ref: ${ref}`);
        }
      }
    }

    return generateDataFromSchema(resolvedSchema, rootSchema);
  } else {
    throw new Error(`Unsupported $ref format: ${ref}`);
  }
}

// module.exports = handleRef;
