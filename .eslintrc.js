/*
 * @Author: hayyot
 * @Date: 2023-06-21 14:18:35
 * @Description: 铁沸物
 * @FilePath: \forum\forum\.eslintrc.js
 */
module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module'
	},
	parser: 'vue-eslint-parser',
	extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended'],
	env: {
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		'no-console': 'off',
		'comma-dangle': [2, 'never'] //禁止使用拖尾逗号
	}
}
