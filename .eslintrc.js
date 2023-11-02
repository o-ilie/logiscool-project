module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "no-warning-comments": "warn",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
