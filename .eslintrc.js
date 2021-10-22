module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:nuxt/recommended"
  ],
  plugins: [],
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}