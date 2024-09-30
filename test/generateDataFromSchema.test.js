import { expect } from "chai";
import { generateDataFromSchema } from "../utils/generateDataFromSchema.mjs";

describe("generateDataFromSchema", function () {
  it("should throw an error for invalid schema", function () {
    expect(() => generateDataFromSchema(null)).to.throw("Invalid schema null");
    expect(() => generateDataFromSchema("not an object")).to.throw("Invalid schema not an object");
  });

  it("should resolve $ref schema", function () {
    const schema = {
      $ref: "#role",
      definitions: {
        role: {
          type: "string",
          enum: ["admin", "user", "guest"],
        },
      },
    };
    const result = generateDataFromSchema(schema, schema);
    expect(result).to.be.oneOf(["admin", "user", "guest"]);
  });

  it("should handle anyOf schemas", function () {
    const schema = {
      anyOf: [{ type: "string" }, { type: "integer" }],
    };
    const result = generateDataFromSchema(schema);

    expect(["string", "number"]).to.include(typeof result);
  });

  it("should handle enum schemas", function () {
    const schema = {
      enum: ["view", "modify", "sign", "execute"],
    };
    const result = generateDataFromSchema(schema);
    expect(result).to.be.oneOf(["view", "modify", "sign", "execute"]);
  });

  it("should generate object based on schema", function () {
    const schema = {
      type: "object",
      properties: {
        name: { type: "string" },
        age: { type: "integer" },
      },
      required: ["name", "age"],
    };
    const result = generateDataFromSchema(schema);
    expect(result).to.be.an("object");
    expect(result).to.have.property("name").that.is.a("string");
    expect(result).to.have.property("age").that.is.a("number");
  });

  it("should generate array based on schema", function () {
    const schema = {
      type: "array",
      items: { type: "integer" },
    };
    const result = generateDataFromSchema(schema);

    expect(result).to.be.an("array").with.length.within(1, 5);
    result.forEach((item) => expect(item).to.be.a("number"));
  });

  it("should generate string based on schema", function () {
    const schema = {
      type: "string",
      minLength: 3,
      maxLength: 5,
    };
    const result = generateDataFromSchema(schema);
    expect(result).to.be.a("string");
    expect(result.length).to.be.within(3, 5);
  });

  it("should generate integer based on schema", function () {
    const schema = {
      type: "integer",
      minimum: 1,
      maximum: 10,
    };
    const result = generateDataFromSchema(schema);
    expect(result).to.be.a("number").within(1, 10);
  });

  it("should generate boolean based on schema", function () {
    const schema = { type: "boolean" };
    const result = generateDataFromSchema(schema);
    expect(result).to.be.a("boolean");
  });

  it("should throw error for unsupported schema types", function () {
    const schema = { type: "unsupportedType" };
    expect(() => generateDataFromSchema(schema)).to.throw("Unsupported type: unsupportedType");
  });
});
