import eslintRecommended from "eslint/conf/eslint-recommended.js";

export default [
  eslintRecommended,
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
