// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // ← Changé à 'module'
      globals: {
        ...globals.node, // ← Ajout des globals Node.js (console, require, etc.)
        ...globals.jest  // ← Ajout des globals Jest (test, expect, describe, etc.)
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];