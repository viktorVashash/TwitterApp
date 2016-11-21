import config from './webpack.config';
import merge from 'webpack-merge';
import webpack from 'webpack';

export default merge(config, {
  devtool: 'source-map',

  entry: [
    'babel-polyfill',
    './main.development'
  ],

  output: {
    path: __dirname,
    filename: './main.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  target: 'electron-main',

  node: {
    __dirname: false,
    __filename: false
  }
});
