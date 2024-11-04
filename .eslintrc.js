module.exports = {
  root : true,
  parserOptions: {
    sourceType: "module"
  },
  extends: "standard",
  plugins: [
    "html"
  ],
  "rules": {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "keyword-spacing": ["error", { "before": true, "after": true }]
  }
}
