module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'\\.(scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: ['node_modules/(?!axios.*)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
	},
	testEnvironment: 'jsdom',

	testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
	verbose: true,
};
