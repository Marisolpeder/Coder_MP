// bs-config.js
module.exports = {
  server: {
    baseDir: "./",
    index: "index.html"
  },
  files: [
    "**/*.html",
    "**/*.css",
    "**/*.js"
  ],
  notify: false,
  ghostMode: false,
  ui: false,
  open: "local",
  port: 3000,
  logLevel: "silent"
};