import validateCNPJ from "core/utils/validateCNPJ";

describe('Testing validateCNPJ core util', () => {
	it('should return true', () => {
		expect(validateCNPJ('37.930.575/0001-13')).toBeTruthy();
	});

	it('should return false', () => {
		expect(validateCNPJ(123)).toBeFalsy();
		expect(validateCNPJ('testing')).toBeFalsy();
		expect(validateCNPJ('37.930.575/000')).toBeFalsy();
		expect(validateCNPJ('37.930.575/0001-10')).toBeFalsy();
		expect(validateCNPJ('77.777.777/7777-77')).toBeFalsy();
		expect(validateCNPJ('37.930.575/0001-1')).toBeFalsy();
	});
});