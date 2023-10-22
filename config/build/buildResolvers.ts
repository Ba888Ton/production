import { ResolveOptions } from "webpack/types";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js']
  } 
}