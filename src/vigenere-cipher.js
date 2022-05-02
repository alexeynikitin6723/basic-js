const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(flag = true) {
		this.flag = flag;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	}
	encrypt(message, key) {
		if (typeof message != 'string' || typeof key != 'string') {
			throw new Error('Incorrect arguments!');
		}
		let result = '';
		let keyIndex = 0;
		for (let i = 0; i < message.length; i++) {
			if (!this.alphabet.includes(message[i].toUpperCase())) {
				result += message[i];
				continue;
			}

			let indexKey = this.alphabet.indexOf(key[keyIndex % key.length].toUpperCase());
			let indexMessage = this.alphabet.indexOf(message[i].toUpperCase());
			let indexRes = (indexKey + indexMessage) % 26;
			result += this.alphabet[indexRes];
			keyIndex++;
		}
		return (this.flag ? result : result.split('').reverse().join(''));
	}
	decrypt(message, key) {
		if (typeof message != 'string' || typeof key != 'string') {
			throw new Error('Incorrect arguments!');
		}
		let result = '';
		let keyIndex = 0;
		for (let i = 0; i < message.length; i++) {
			if (!this.alphabet.includes(message[i].toUpperCase())) {
				result += message[i];
				continue;
			}
			let indexKey = this.alphabet.indexOf(key[keyIndex % key.length].toUpperCase());
			let indexMessage = this.alphabet.indexOf(message[i].toUpperCase());
			let indexRes = ((indexMessage - indexKey) > 0 ? (indexMessage - indexKey) % 26 : (indexMessage - indexKey + 26) % 26);
			result += this.alphabet[indexRes];
			keyIndex++;
		}
		return (this.flag ? result : result.split('').reverse().join(''));
	}
}

module.exports = {
	VigenereCipheringMachine
};
