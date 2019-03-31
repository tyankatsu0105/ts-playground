const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  target: 'node',
  entry: path.join(__dirname, 'src/main.ts'),
  output: {
    //  出力ファイルのディレクトリ名
    path: path.join(__dirname, 'lib'),
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: path.join(__dirname, 'tsconfig.json') })],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
