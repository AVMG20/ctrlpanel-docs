import { generateFiles } from 'fumadocs-openapi';

console.log(1)

void generateFiles({
  input: ['./openapi.yaml'], // the OpenAPI schemas
  output: './content/docs',
});