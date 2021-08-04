import federalDocumentMask from "core/utils/federalDocumentMask";


describe('Testing federalDocumentMask core util', () => {
	it('should return 123.123.123-12', () => {
		const value = federalDocumentMask('12312312312');

		expect(value).toBe('123.123.123-12');
	});

	it('should return 12.312.312/3123-12', () => {
		const value = federalDocumentMask('12312312312312');

		expect(value).toBe('12.312.312/3123-12');
	});

	it('should return 123.123.123-1', () => {
		const value = federalDocumentMask('1231231231');

		expect(value).toBe('123.123.123-1');
	});

	it('should return 123.123.1', () => {
		const value = federalDocumentMask('1231231');

		expect(value).toBe('123.123.1');
	});

	it('should return void string', () => {
		const value = federalDocumentMask('ssashasahas');

		expect(value).toBe('');
	});
});