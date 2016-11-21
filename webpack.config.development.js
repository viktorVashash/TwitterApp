import config from './webpack.config';
import webpack from 'webpack';
import merge from 'webpack-merge';

const port = process.env.PORT || 8080;

export default merge(config, {
  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: './app/js/index',

  output: {
    publicPath: `http://localhost:${port}/js/`
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?sourceMap']
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin(),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  target: 'electron-renderer'
});
