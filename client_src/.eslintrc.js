module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "never"],
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
