import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist", "fixtures"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "name": "custom",
    "rules": {
      "curly": ["error", "multi-line", "consistent"],
      "dot-notation": "error",
      "max-nested-callbacks": ["warn", { "max": 4 }],
      "no-console": "off",
      "no-undefined": "off",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "error",
      "no-inline-comments": "off",
      "no-lonely-if": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-undef-init": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "^props$" }],
      "yoda": ["error", "never", { "exceptRange": true }],
    },
  },
  stylistic.configs.customize({
    braceStyle: "1tbs",
    quoteProps: "consistent",
    quotes: "double",
    semi: true,
  }),
  {
    "name": "@stylistic/overrides",
    "rules": {
      "@stylistic/member-delimiter-style": ["error", {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true,
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false,
        },
        "multilineDetection": "brackets",
      }],
    },
  },
];
