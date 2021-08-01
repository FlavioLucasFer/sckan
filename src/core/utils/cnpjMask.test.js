import cnpjMask from './cnpjMask';

describe('CNPJ mask tests', () => {
	test('Should return 12.312.312/3123-12', () => {
		const value = cnpjMask('12312312312312');

		expect(value).toBe('12.312.312/3123-12');
	});
});