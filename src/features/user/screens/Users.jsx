import React, { useState } from 'react';

import ListScreen from 'core/components/ListScreen';
import { USER_FORM_ROUTE } from 'core/utils/routes';

function User() {
	const [data, setData] = useState([]);
	const fields = [{}];

  return (
		<ListScreen title="Users"
			singularTitle="User"
			data={data}
			fields={fields}
			identifierField=""
			pagesQuantity={1}
			formRoute={USER_FORM_ROUTE}
			onRefresh={null} />
  );
}

export default User;
