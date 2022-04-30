const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (date === undefined)
		return 'Unable to determine the time of year!';
	if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]')
		throw new Error('Invalid date!');
	try {
		date.getUTCFullYear();
	}
	catch {
		throw new Error('Invalid date!');
	}
	let result = date.getMonth();
	if (result >= 2 && result <= 4)
		return 'spring';
	else if (result >= 5 && result <= 7)
		return 'summer';
	else if (result >= 8 && result <= 10)
		return 'fall';
	else
		return 'winter'

}

module.exports = {
	getSeason
};
