'use strict';

function federalDocumentMask(value) {
	value = value.replace(/\D/g, '');

	if (value.length <= 11) { //CPF
		value = value.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
	} else { //CNPJ
		value = value.replace(/^(\d{2})(\d)/, '$1.$2')
			.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
			.replace(/\.(\d{3})(\d)/, '.$1/$2')
			.replace(/(\d{4})(\d)/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');
	}

	return value;
}

export default federalDocumentMask;
