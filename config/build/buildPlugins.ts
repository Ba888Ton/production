import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance } from 'webpack/types';
import { BuildOptions } from "./types/config";
import webpack from 'webpack'

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
      title: 'Development',
      templateParameters: {
        'foo': 'template Parameters'
      },
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash:8].css',
      chunkFilename: 'css/[name][contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}