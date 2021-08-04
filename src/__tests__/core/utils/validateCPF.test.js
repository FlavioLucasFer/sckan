import validateCPF from "core/utils/validateCPF";

describe('Testing validateCPF core util', () => {
	it('should return true', () => {
		expect(validateCPF('243.944.930-05')).toBeTruthy();
	});

	it('should return false', () => {
		expect(validateCPF(656756)).toBeFalsy();
		expect(validateCPF('testing')).toBeFalsy();
		expect(validateCPF('243.944.93')).toBeFalsy();
		expect(validateCPF('243.944.930-09')).toBeFalsy();
		expect(validateCPF('777.777.777-77')).toBeFalsy();
		expect(validateCPF('243.944.930-0')).toBeFalsy();
	});
});