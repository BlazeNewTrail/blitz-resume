module.exports = {
  extends: [
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
    'eslint-config-airbnb-base',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
        ],
        extensions: ['.vue', '.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // prettier html formatter compatibility
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'operator-linebreak': 0,
    // reenable once https://github.com/prettier/prettier/pull/6644 is released
    'vue/max-attributes-per-line': 0,
    // replace max len with vue compatible rule
    'max-len': 0,
    'vue/max-len': [
      'error',
      {
        code: 100,
        template: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
      },
    ],
  },
};
