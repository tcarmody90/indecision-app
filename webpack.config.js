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
    }]
  }
};