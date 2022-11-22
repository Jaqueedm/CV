module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,html,jpg,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};