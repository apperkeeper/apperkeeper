const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');


module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    devServer: {
      publicPath: '/public/',
      compress: true,
      hot: true,
      port: 8080,
      proxy: {
        '/someFutureEndpoint': 'http://localhost:3000',
      },
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
