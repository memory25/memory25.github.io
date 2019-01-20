module.exports = {
  parser: 'typescript-eslint-parser',
  extends: [
    'airbnb',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      es6: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    __RELEASE__: false,
    __DEV__: false,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'babel', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',

    //##temp
    'no-console': 'off',

    //## Best Practices
    'class-methods-use-this': 'off',
    'consistent-return': 'off',

    //## Variables

    //## Stylistic Issues
    'no-underscore-dangle': 'off',

    //## ECMAScript 6

    //## import // handle in webpack
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    // this is alias, if remove these rule , have to install eslint-import-resolver-alias and settings the same setting as webpack

    //## react
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.tsx']},
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    //## jsx

    //## babel
  },
};
