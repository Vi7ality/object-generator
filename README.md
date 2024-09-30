# JSON Schema Data Generator

This is a Node.js CLI application for generating mock data from a JSON Schema. It leverages Node.js built-in tools like `fs` and `path` to read schema files and create randomized data based on the schema’s structure.

## Features

- Supports different schema types including `object`, `array`, `string`, `integer`, `boolean`, `anyOf`, and `$ref`.
- Handles schema constraints such as `enum`, `minItems`, `maxItems`, `minLength`, and `maxLength`.
- Randomized data generation for testing purposes.
- Modular design with separate functions for different schema types.

## Tools and Libraries

- **Node.js**: The core of the application, utilizing `fs/promises` to read files and `path` for resolving schema paths.
- **fs**: Used to asynchronously read the JSON schema from the filesystem.
- **path**: Utilized for resolving schema file paths.
- **Mocha**: A feature-rich JavaScript testing framework that runs on Node.js, Mocha allows you to organize and run tests asynchronously in a structured way. It provides a flexible environment for creating unit tests and supports various reporting styles.
- **Chai**: A BDD/TDD assertion library for Node.js that works with Mocha. Chai allows for readable, expressive assertions to validate your code. It provides various interfaces, such as `expect`, `should`, and `assert`, to suit your testing style.

## Installation

To start using the app you need to have Node.js installed.

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a JSON Schema file or use the provided `json-schema.json` or use default schema.

## Usage

To generate mock data based on a schema:

```bash
node index.js

```

## Shema Example

json-schema.json

{
"$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "role": { "$ref": "#/definitions/role" },
"permissions": {
"type": "array",
"items": { "enum": ["view", "modify", "sign", "execute"] }
}
},
"definitions": {
"role": {
"type": "string",
"enum": ["admin", "user", "guest"]
}
}
...
}
