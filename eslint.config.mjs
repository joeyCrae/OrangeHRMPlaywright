import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import playwright from "eslint-plugin-playwright";

const playwrightRecommended =
  playwright.configs["flat/recommended"] ?? playwright.configs.recommended;

export default [
  {
    ignores: [
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "allure-results/**",
      "allure-report/**",
      "dist/**",
      "build/**"
    ]
  },
  {
    files: ["**/*.{ts,tsx,cts,mts,js,cjs,mjs}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules
    }
  },
  {
    files: [
      "**/*.{spec,test}.{ts,tsx,js,jsx}",
      "**/tests/**/*.{ts,tsx,js,jsx}"
    ],
    plugins: {
      playwright
    },
    rules: {
      ...playwrightRecommended.rules
    }
  }
];
