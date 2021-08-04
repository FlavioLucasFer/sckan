import React from 'react';
import { shallow } from 'enzyme';

import CompanyForm from 'features/company/screens/CompanyForm';

describe('Testing CompanyForm form component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<CompanyForm />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			id: '2446456',
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});