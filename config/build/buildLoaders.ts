import { RuleSetRule } from 'webpack/types'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  }

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
    svgLoader,
    fileLoader,
    styleLoader,
    typescriptLoader
  ]
}