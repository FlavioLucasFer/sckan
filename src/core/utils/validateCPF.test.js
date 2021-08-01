import validateCPF from "./validateCPF";

describe('CPF validation tests', () => {
	test('Should return true', () => {
		expect(validateCPF('243.944.930-05')).toBeTruthy();
	});

	test('Should return false', () => {
		expect(validateCPF('243.944.930-09')).toBeFalsy();
		expect(validateCPF('777.777.777-77')).toBeFalsy();
		expect(validateCPF('testing')).toBeFalsy();
		expect(validateCPF('243.944.930-0')).toBeFalsy();
	});
});