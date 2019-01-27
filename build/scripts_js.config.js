const baseConfig = require('./basic.config')();
const path = require('path');
const glob = require('glob');
let dir = path.resolve();

const pathTo = dir.replace(/\\/g, '/') + '/addons/';

// Read all styles.scss from shortcodes
const files = glob.sync(pathTo + '**/scripts.js');
console.log( files );

let scripts = files.reduce((acc, item) => {
	let name = item.replace(pathTo, '');
	name = name.replace('/src/js/scripts.js', '');
	acc[name] = new Array(item);
	return acc;
}, {});

module.exports = Object.assign(
	{
		entry: scripts,
        output: {
			path: path.resolve("./"),
			filename: "./addons/[name]/assets/js/scripts.min.js"
		}
	},
	baseConfig
);
