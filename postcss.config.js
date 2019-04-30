const postcssPresetEnv = require('postcss-preset-env');

const syntax = require('postcss-syntax')({
  rules: [
      {
        test: /\.js$/i,
        extract: 'jsx',
      },
  ],
  emotion: true,
  'react-emotion': true,
  styled: true,
  css: true,

  jsx: 'postcss-jsx',
});

module.exports = {
  syntax,
  plugins: [
    require('postcss-normalize'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        // grid: 'autoplace'
      }
    }),
  ]
};

