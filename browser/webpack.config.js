var path = require('path');

module.exports = {
 
  entry: path.join(__dirname, 'src/main.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  }
};
