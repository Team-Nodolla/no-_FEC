const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './client/app/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        }],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [
  //   new CompressionPlugin({
  //     filename: './bundle.js.gz',
  //     algorithm: 'gzip',
  //     test: /\.(js|css)$/i,
  //   }),
  // ],

};
