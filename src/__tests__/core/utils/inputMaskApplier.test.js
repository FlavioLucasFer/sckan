import inputMaskApplier from "core/utils/inputMaskApplier";

describe('Testing inputMaskApplier core util', () => {
	it('should return 123.123.123-12', () => {
		const value = inputMaskApplier('cpf', '12312312312');
		const value2 = inputMaskApplier('federalDocument', '12312312312');

		expect(value).toBe('123.123.123-12');
		expect(value2).toBe('123.123.123-12');
	});

	it('should return 12.312.312/3123-12', () => {
		const value = inputMaskApplier('cnpj', '12312312312312');
		const value2 = inputMaskApplier('federalDocument', '12312312312312');

		expect(value).toBe('12.312.312/3123-12');
		expect(value2).toBe('12.312.312/3123-12');
	});
});