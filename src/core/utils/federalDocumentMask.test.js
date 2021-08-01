import federalDocumentMask from "./federalDocumentMask";


describe('Federal document mask tests', () => {
	describe('CPF mask tests', () => {
		test('Should return 123.123.123-12', () => {
			const value = federalDocumentMask('12312312312');

			expect(value).toBe('123.123.123-12');
		});
	});

	describe('CNPJ mask tests', () => {
		test('Should return 12.312.312/3123-12', () => {
			const value = federalDocumentMask('12312312312312');

			expect(value).toBe('12.312.312/3123-12');
		});
	});
});