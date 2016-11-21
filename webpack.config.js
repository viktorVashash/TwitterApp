import path from 'path';
import webpack from 'webpack';

let config = {
  entry: [],

  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.js'
  },

   module: {
     loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
   },

   resolve: {
     extensions: ['', '.js', '.jsx', '.json']
   },

   plugins: []
};

export default config;
