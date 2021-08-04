import cnpjMask from 'core/utils/cnpjMask';

describe('Testing cnpjMask core util', () => {
	it('should return 12.312.312/3123-12', () => {
		const value = cnpjMask('12312312312312');

		expect(value).toBe('12.312.312/3123-12');
	});

	it('should return 12.312.312/312', () => {
		const value = cnpjMask('12312312312');

		expect(value).toBe('12.312.312/312');
	});

	it('should return void string', () => {
		const value = cnpjMask('asasasfasfsff');

		expect(value).toBe('');
	});
});