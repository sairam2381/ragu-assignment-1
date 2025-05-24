import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat();

export default [
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        process: "readonly",
        console: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script", // or 'module' if you use ES modules elsewhere
      },
    },
    env: {
      node: true,
      commonjs: true,
    },
    rules: {
      // your rules here
    },
  },
  ...compat.extends("eslint:recommended"),
];
