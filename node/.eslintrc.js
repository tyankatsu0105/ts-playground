module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error"
  }
}