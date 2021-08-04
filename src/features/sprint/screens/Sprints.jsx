import React, { useState } from 'react';

import ListScreen from 'core/components/ListScreen';
import { SPRINT_FORM_ROUTE } from 'core/utils/routes';

function Sprints() {
	const [data, setData] = useState([]);
	const fields = [{}];

  return (
		<ListScreen title="Sprints"
			singularTitle="Sprint"
			data={data}
			fields={fields}
			identifierField=""
			pagesQuantity={1}
			formRoute={SPRINT_FORM_ROUTE}
			onRefresh={null} />
  );
}

export default Sprints;
