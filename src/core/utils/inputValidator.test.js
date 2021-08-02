import inputValidator from "./inputValidator";

describe('Input validator tests', () => {
	test('Should return true', () => {
		const [cpf] = inputValidator('cpf', '243.944.930-05');
		const [cnpj] = inputValidator('cnpj', '37.930.575/0001-13');
		const [email] = inputValidator('email', 'test@mail.domain');
		const [federalDocument] = inputValidator('federalDocument', '243.944.930-05');
		const [federalDocument2] = inputValidator('federalDocument', '37.930.575/0001-13');

		expect(cpf).toBeTruthy();
		expect(cnpj).toBeTruthy();
		expect(email).toBeTruthy();
		expect(federalDocument).toBeTruthy();
		expect(federalDocument2).toBeTruthy();
	});
	
	test('Should return false', () => {
		const [cpf] = inputValidator('cpf', '243.944.930-0');
		const [cnpj] = inputValidator('cnpj', '37.930.575/0001-1');
		const [email] = inputValidator('email', 'test@maildomain');
		const [federalDocument] = inputValidator('federalDocument', '243.944.930-0');
		const [federalDocument2] = inputValidator('federalDocument', '37.930.575/0001-1');
	
		expect(cpf).toBeFalsy();
		expect(cnpj).toBeFalsy();
		expect(email).toBeFalsy();
		expect(federalDocument).toBeFalsy();
		expect(federalDocument2).toBeFalsy();
	});
});