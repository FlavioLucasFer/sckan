import validateEmail from "core/utils/validateEmail";

describe('Testing validateEmail core util', () => {
	it('should return true', () => {
		expect(validateEmail('test@mail.domain')).toBeTruthy();
		expect(validateEmail('test@gmail.com')).toBeTruthy();
		expect(validateEmail('test@hotmail.com')).toBeTruthy();
		expect(validateEmail('test@outlook.com')).toBeTruthy();
	});

	it('should return false', () => {
		expect(validateEmail(6688)).toBeFalsy();
		expect(validateEmail('test')).toBeFalsy();
		expect(validateEmail('test@maildomain')).toBeFalsy();
		expect(validateEmail('testmail.domain')).toBeFalsy();
	});
});