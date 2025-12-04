// postcss.config.js
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

// Configuración de PurgeCSS
const purgecssConfig = {
  content: [
    './**/*.html',
    './**/*.js',
    './**/*.php',
    './**/*.vue'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: [
      'active',
      'show',
      'collapsed',
      'fade',
      /^carousel/,
      /^modal/,
      /^fade$/,
      /^show$/,
      /^collapsing$/,
      /^collapsed$/,
      /^dropdown/,
      /^btn-/,
      /^bg-/,
      /^text-/,
      /^border-/
    ],
    deep: []
  }
};

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}