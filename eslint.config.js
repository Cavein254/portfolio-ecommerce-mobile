import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import ParserTypescriptEslint from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: ParserTypescriptEslint,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      prettier,
      jest,
      "@typescript-eslint": ["plugin:@typescript-eslint/recommended"],
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["warn", "always"],
    },
  },
];
