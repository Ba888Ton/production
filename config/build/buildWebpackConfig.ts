import { Configuration } from "webpack/types";
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildDevServer } from "./buildDevServer";
import { Configuration as DevServerConfuguration } from "webpack-dev-server";
import path from 'path';

interface MyConfiguration extends Configuration {
  devServer?: DevServerConfuguration
}

export function buildWebpackConfig(options: BuildOptions): MyConfiguration {
  const {mode, paths, isDev} = options;
  
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
  }
}