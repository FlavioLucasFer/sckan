import validateCNPJ from "./validateCNPJ";

describe('CNPJ validation tests', () => {
	test('Should return true', () => {
		expect(validateCNPJ('37.930.575/0001-13')).toBeTruthy();
	});

	test('Should return false', () => {
		expect(validateCNPJ('37.930.575/0001-10')).toBeFalsy();
		expect(validateCNPJ('77.777.777/7777-77')).toBeFalsy();
		expect(validateCNPJ('testing')).toBeFalsy();
		expect(validateCNPJ('37.930.575/0001-1')).toBeFalsy();
	});
});