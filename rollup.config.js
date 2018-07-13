import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';

const name = 'AutoComplete';

export default {
	input: 'src/index.html',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'iife', name }
	],
	plugins: [
		svelte({
			cascade: false,
			store: true
		})
	]
};
