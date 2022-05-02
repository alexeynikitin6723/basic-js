const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	if (!options.separator) options.separator = '+';
	if (!options.additionSeparator) options.additionSeparator = '|';
	if (!options.repeatTimes) options.repeatTimes = 1;
	if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
	if (!options.addition) options.addition = '';
	if (typeof options.addition != 'string') options.addition = String(options.addition);
	if (typeof str != 'string') str = String(str);
	let result = '';
	for (let j = 0; j < options.repeatTimes; j++) {
		result += str;
		for (let i = 0; i < options.additionRepeatTimes; i++) {
			if (i == options.additionRepeatTimes - 1)
				result += `${options.addition}`;
			else
				result += `${options.addition}${options.additionSeparator}`;
		}
		if (j != options.repeatTimes - 1)
			result += `${options.separator}`;
	}
	return result;
}

module.exports = {
	repeater
};
