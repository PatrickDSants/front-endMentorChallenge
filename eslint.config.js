import js from '@eslint/js';
import pluginTailwind from 'eslint-plugin-tailwindcss';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        ScrollReveal: 'readonly',
      },
    },
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      ...js.configs.recommended.rules,
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];
