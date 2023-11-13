module.exports = {
  env: {
    browser:     true,
    es2021: true
  }, 
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json'
      // './packages/*/tsconfig.json',
    ]
  },
  plugins: [
    'react'
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": [0],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "@typescript-eslint/comma-dangle": "off",
    "comma-dangle": ["warn", "always-multiline"],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-vars": ["off", { "vars": "local" }],
    
    "@typescript-eslint/strict-boolean-expressions": [0], // not shure
    "@typescript-eslint/explicit-function-return-type": [0],
    "react/no-deprecated": "off",
  }
}
