const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let result = [];
	if (Array.isArray(members)) {
		for (let index = 0; index < members.length; index++) {
			if (typeof members[index] == 'string') {
				result.push(members[index].trim()[0].toUpperCase())
			}
		}
	}
	result.sort();
	return (result.length > 0 ? result.join('') : false);
}

module.exports = {
	createDreamTeam
};
