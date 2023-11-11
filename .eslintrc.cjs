module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'linebreak-style': 0,
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
