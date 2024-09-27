export function generateString(schema) {
  if (schema.enum) {
    const index = Math.floor(Math.random() * schema.enum.length);
    return schema.enum[index];
  }

  const minLength = schema.minLength || 5;
  const maxLength = schema.maxLength || 10;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// module.exports = generateString;
