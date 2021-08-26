'use strict';

function isAdmin(user) {
	return user.companyPosition === 'AD';
}

export default isAdmin;
