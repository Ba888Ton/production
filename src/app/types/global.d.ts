// if you use css
declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

// if you use scss
declare module '*.module.scss' {
  const classes: Record<string, string>
  export default classes
}

// if you use less
declare module '*.module.less' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
