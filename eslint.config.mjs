import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
 {
  files: ['**/*.{js,ts}'],
  extends: [js.configs.recommended, tseslint.configs.recommended],
},
{
		languageOptions: {
			globals: {
			...global.node
			},
		},
	},

{rules:{
"no-unused-vars": "warn",
"no-undefined": "error",
"prefer-const": "error",
"no-console": "warn",
}},
{ignores: ["**/node_modules/**", "**/dist/**"]},



);