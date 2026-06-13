const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/test/**/*.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};