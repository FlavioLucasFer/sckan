import validateEmail from "./validateEmail";
import validateCPF from "./validateCPF";
import validateCNPJ from "./validateCNPJ";

function inputValidator(validateBy, value) {
	let isValid = true;
	let errorMessage = '';
	
	switch (validateBy) {
		case 'email':
			isValid = validateEmail(value);

			if (!isValid)
				errorMessage = 'Invalid email';
			break;

		case 'cpf':
			isValid = validateCPF(value);

			if (!isValid)
				errorMessage = 'Invalid CPF';
			break;

		case 'cnpj':
			isValid = validateCNPJ(value);

			if (!isValid)
				errorMessage = 'Invalid CNPJ';
			break;
	
		case 'federalDocument':
			if (value.length <= 14)
				isValid = validateCPF(value);
			else
				isValid = validateCNPJ(value);

			if (!isValid)
				errorMessage = 'Invalid document';
			break;

		default:
			break;
	}

	return [isValid, errorMessage];
}

export default inputValidator;