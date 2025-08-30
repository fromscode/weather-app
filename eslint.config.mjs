import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          variables: true,
          allowNamedExports: false,
        },
      ],
      "no-unused-vars": "error",
      "no-self-assign": "error",
    },
  },
]);
