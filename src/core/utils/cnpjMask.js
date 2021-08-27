'use strict';

function cpnjMask(value) {
	return value.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1/$2')
		.replace(/(\d{4})(\d{1,3})/, '$1-$2')
		.replace(/(-\d{2})\d+?$/, '$1');
}

export default cpnjMask;
