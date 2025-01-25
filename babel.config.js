module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true, targets: { node: 22 } }],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
