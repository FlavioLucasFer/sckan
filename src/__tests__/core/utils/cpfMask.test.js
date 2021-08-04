import cpfMask from "core/utils/cpfMask";

describe('Testing cpfMask core util', () => {
	it('should return 123.123.123-12', () => {
		const value = cpfMask('12312312312');

		expect(value).toBe('123.123.123-12');
	});

	it('should return 123.123.1', () => {
		const value = cpfMask('1231231');

		expect(value).toBe('123.123.1');
	});

	it('should return void string', () => {
		const value = cpfMask('sesdsar');

		expect(value).toBe('');
	});
});