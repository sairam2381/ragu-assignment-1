import eslintPluginJs from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**"],
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {},
    rules: {
      ...eslintPluginJs.configs.recommended.rules,
    },
  },
];
