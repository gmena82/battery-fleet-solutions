import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const tsParserOptions = {
  project: ['./tsconfig.json'],
  tsconfigRootDir: __dirname,
};

const typescriptImportConfigs = compat
  .extends('plugin:import/typescript')
  .map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...(config.languageOptions ?? {}),
      parser: tsParser,
      parserOptions: tsParserOptions,
    },
  }));

export default [
  {
    ignores: ['eslint.config.mjs'],
  },
  ...compat.extends(
    'plugin:@next/next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
  ),
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  ...typescriptImportConfigs,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: tsParserOptions,
    },
  },
];
