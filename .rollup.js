import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true },
		{ file: 'index.esm.mjs', format: 'esm', sourcemap: true }
	],
	plugins: [
		babel({
			plugins: [
				'@babel/plugin-syntax-dynamic-import'
			],
			presets: [
				['@babel/env', { targets: { node: 6 } }]
			]
		})
	]
};