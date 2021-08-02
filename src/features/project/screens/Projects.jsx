import React, { useState } from 'react';

import ListScreen from 'core/components/ListScreen';
import { PROJECT_FORM_ROUTE } from 'core/utils/routes';

function Project() {
	const [data, setData] = useState([]);
	const fields = [{}];

  return (
    <ListScreen title="Projects"
			singularTitle="Project"
			data={data}
			fields={fields}
			identifierField=""
			pagesQuantity={1}
			formRoute={PROJECT_FORM_ROUTE}
			onRefresh={null} />
  );
}

export default Project;
