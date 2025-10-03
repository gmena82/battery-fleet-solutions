module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  },
  extends: [
    "next/core-web-vitals",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "prettier"
  ],
  plugins: ["jsx-a11y", "import"],
  rules: {
    "import/order": [
      "error",
      {
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "newlines-between": "always"
      }
    ]
  }
};
