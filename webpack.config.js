const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const environment = isProduction ? 'production' : 'development';
  const publicPath = env.public_path || '';

  return {
    // context: sourcePath,

    entry: {
      app: path.join(__dirname, './src/index.tsx'),
    },

    output: {
      chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      publicPath,
      path: distPath,
    },

    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true, // set to true if you want JS source maps
        }),
      ],
      splitChunks: {
        cacheGroups: {
          // Split vendor code to its own chunk(s)
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: 'all',
          },
        },
      },
      // The runtime should be in its own chunk
      runtimeChunk: {
        name: 'runtime',
      },
    },

    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment),
          APP_NAME: JSON.stringify(process.env.npm_package_config_appName),
        },
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader',
          }],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: { name: 'images/[name].[hash:8].[ext]' },
          }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },

    devtool: (() => {
      if (isProduction) return 'hidden-source-map';
      return 'cheap-module-eval-source-map';
    })(),

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8769,
      hot: true,
      host: '0.0.0.0',
      liveReload: false,
    },
  };
};
