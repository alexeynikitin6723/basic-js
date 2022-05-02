const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	n = n.toString().split('');
	let res = [];
	let max = 0;
	for (let i = 0; i < 10; i++) {
		if (!(n.join('').includes(i))) continue;
		res = +(n.join('').slice(0, n.join('').lastIndexOf(i)) + n.join('').slice(n.join('').lastIndexOf(i) + 1));
		if (res > max)
			max = res;
	}
	return max;
}

module.exports = {
	deleteDigit
};
