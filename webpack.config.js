const path = require('path');
const webpack = require('webpack');

const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//Is Application In Development MOde
const isEnvDevelopment = process.env.NODE_ENV === 'development';

const srcPath = path.resolve(__dirname, './src');
const distPath = path.resolve(__dirname, './dist');
const templatePath = path.resolve(__dirname, './public/template.html');
const htmlPath = path.resolve(__dirname, './dist/template.html');

module.exports = {
  devtool: isEnvDevelopment ? 'inline-source-map' : false,
  mode: isEnvDevelopment ? 'development' : 'production',
  context: srcPath,
  entry: {
    app: isEnvDevelopment ? ['index.js', 'webpack-hot-middleware/client'] : 'index.js',
  },
  output: {
    path: distPath,
    filename: isEnvDevelopment ? 'js/[name].js' : 'js/[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
  ].concat(
    isEnvDevelopment
      ? [new webpack.HotModuleReplacementPlugin()]
      : [
          new HtmlWebpackPlugin({
            template: templatePath,
            minify: false,
            filename: htmlPath,
          }),
        ],
  ),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' },
		  {
            loader: path.resolve('./tools/importer-loader.js'),
            options: {
              functionName: 'importer',
            },
          }
        ],
      },
      {
        test: /\.(css)$/,
        use: [
			{loader:'css-loader'}
		],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  optimization: {
    minimize: !isEnvDevelopment,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        vendor: isEnvDevelopment
          ? {
              test: /node_modules/,
              name: 'vendor',
              chunks: 'all',
              enforce: true,
            }
          : {
              test: /node_modules/,
              name: 'vendor',
              chunks: 'all',
              enforce: true,
              minSize: 75 * 1000, // 75 kb
              maxSize: 200 * 1000, // 200 kb
            },
      },
    },
  },
};
