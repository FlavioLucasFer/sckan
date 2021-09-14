'use strict';

function validateCNPJ(value) {
	const match = value.toString().match(/\d/g);
	const numbers = Array.isArray(match) ? match.map(Number) : [];

	if (
		!numbers ||
		numbers == "00000000000000" ||
		numbers == "11111111111111" ||
		numbers == "22222222222222" ||
		numbers == "33333333333333" ||
		numbers == "44444444444444" ||
		numbers == "55555555555555" ||
		numbers == "66666666666666" ||
		numbers == "77777777777777" ||
		numbers == "88888888888888" ||
		numbers == "99999999999999"
	) {
		return false;
	}

	const isString = typeof value === 'string';
	const validTypes = isString || Number.isInteger(value) || Array.isArray(value);

	if (!validTypes) 
		return false;

	if (isString) {
		if (value.length > 18) 
			return false;

		const digitsOnly = /^\d{14}$/.test(value);
		const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);

		if (digitsOnly || validFormat) 
			true;
		else 
			return false;
	}

	if (numbers.length !== 14) 
		return false;

	const items = [...new Set(numbers)];
	if (items.length === 1) 
		return false;

	const calc = x => {
		const slice = numbers.slice(0, x);
		let factor = x - 7;
		let sum = 0;

		for (let i = x; i >= 1; i--) {
			const n = slice[x - i];
			sum += n * factor--;
			if (factor < 2) 
				factor = 9;
		}

		const result = 11 - (sum % 11);

		return result > 9 ? 0 : result;
	}

	const digits = numbers.slice(12);

	const digit0 = calc(12);
	if (digit0 !== digits[0]) 
		return false;

	const digit1 = calc(13);
	return digit1 === digits[1];
}

export default validateCNPJ;
