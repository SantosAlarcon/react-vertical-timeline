module.exports = {
	presets: [
		["@babel/preset-env", { loose: true, targets: { node: "current" } }],
		"@babel/preset-react",
		"@babel/preset-typescript",
	],
	plugins: ["@babel/plugin-syntax-dynamic-import"],
};
