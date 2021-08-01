import cpfMask from "./cpfMask";

describe('CPF mask tests', () => {
	test('Should return 123.123.123-12', () => {
		const value = cpfMask('12312312312');

		expect(value).toBe('123.123.123-12');
	});
});