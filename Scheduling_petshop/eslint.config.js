import globals from 'globals'
import pluginJs from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 100,
          tabWidth: 2,
        },
      ],
    },
  },
]
