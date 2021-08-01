import validateEmail from "./validateEmail";

describe('Email validation tests', () => {
	test('Should return true', () => {
		expect(validateEmail('test@mail.domain')).toBeTruthy();
		expect(validateEmail('test@gmail.com')).toBeTruthy();
		expect(validateEmail('test@hotmail.com')).toBeTruthy();
		expect(validateEmail('test@outlook.com')).toBeTruthy();
	});

	test('Shoud return false', () => {
		expect(validateEmail('test@maildomain')).toBeFalsy();
		expect(validateEmail('testmail.domain')).toBeFalsy();
		expect(validateEmail('test')).toBeFalsy();
	});
});