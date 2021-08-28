'use strict';

function model(id, companyName, tradingName, federalDocument, email) {
	return {
		...((id) && { id }),
		...((companyName) && { companyName }),
		...((tradingName) && { tradingName }),
		...((federalDocument) && { federalDocument }),
		...((email) && { email }),
	};
}

export default model;
