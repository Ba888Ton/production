import { Configuration as DevServerConfuguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function BuildDevServer({port}: BuildOptions): DevServerConfuguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  }
}