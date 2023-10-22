import { RuleSetRule } from 'webpack/types'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev 
            ? '[path][name]__[local]--[hash:base64:5]' 
            : '[hash:base64:8]',
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          }
        },
      },
      'sass-loader'
    ],
    exclude: /node_modules/,
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    styleLoader,
    typescriptLoader
  ]
}