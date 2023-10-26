import { ResolveOptions } from "webpack/types";
import { BuildOptions } from "./types/config";
// import path from 'path';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  console.log('options.paths.src >>> ', options.paths.src);
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  } 
}