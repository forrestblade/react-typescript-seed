const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }, 'ts-loader'
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(png|jp2|jpg|gif)$/,
        loaders: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader',
          { loader: 'postcss-loader',
            options: {
              config: {
                path: './config/postcss.config.js'
              }
            }
          }
        ]
      }
    ]
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: './',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '65-75'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'React Seed',
      favicon: './public/favicon.png'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
