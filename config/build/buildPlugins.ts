import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance } from 'webpack/types';
import { BuildOptions } from "./types/config";
import webpack from 'webpack'

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

  const plugins = [
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
    }),
  ]
  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  return plugins;
}