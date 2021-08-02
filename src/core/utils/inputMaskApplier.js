import cpnjMask from "./cnpjMask";
import cpfMask from "./cpfMask";
import federalDocumentMask from "./federalDocumentMask";

function inputMaskApplier(mask, value) {
	switch (mask) {
		case 'cpf':
			value = cpfMask(value);
			break;

		case 'cnpj':
			value = cpnjMask(value);
			break;
	
		case 'federalDocument':
			value = federalDocumentMask(value);
			break;

		default:
			break;
	}

	return value;
}

export default inputMaskApplier;