export function generateEnum(schema) {
  const enumValues = schema.enum;
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}
