const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
 
  entry: path.join(__dirname, 'src/main.ts'),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'babel-loader',
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(__dirname, 'tsconfig.json') })],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
