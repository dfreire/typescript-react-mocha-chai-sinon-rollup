import typescript from 'rollup-plugin-typescript';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
	entry: 'test/**/*.ts',
	dest: 'dist/tests.js',
    sourceMap: true,
	format: 'umd',
    moduleName: 'moduleNameTests',
	globals: {
        chai: "chai"
    },
	external: [
		"chai"
	],
	plugins: [
		multiEntry(),
		typescript()
	]
};
