'use strict';

function isProductOwner(user) {
	return user.companyPosition === 'PO';
}

export default isProductOwner;
