'use strict';

function model(id, name, login, password, cpf, companyPosition, company) {
	return {
		...((id) && { id }),
		...((name) && { name }),
		...((login) && { login }),
		...((password) && { password }),
		...((cpf) && { cpf }),
		...((companyPosition) && { companyPosition }),
		...((company) && { company }),
	};
}

export default model;
