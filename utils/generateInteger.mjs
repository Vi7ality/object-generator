export function generateInteger(schema) {
  if (schema.enum) {
    const index = Math.floor(Math.random() * schema.enum.length);
    return schema.enum[index];
  }

  const min = schema.minimum || 0;
  const max = schema.maximum || 999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
