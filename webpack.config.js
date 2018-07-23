const path = require('path');

console.log(path.join(__dirname, 'public')); // /home/ubuntu/workspace/indecision-app/src

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader', 
        'sass-loader'
      ]
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public')
  }
};