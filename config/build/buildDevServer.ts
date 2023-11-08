import { type Configuration as DevServerConfuguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function BuildDevServer ({ port }: BuildOptions): DevServerConfuguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
