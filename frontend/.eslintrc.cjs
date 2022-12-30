module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["off", "single"],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "no-nested-ternary": "off",
    "no-return-assign": "off",
    "react/button-has-type": "off",
    "consistent-return": "off",
  },
};
