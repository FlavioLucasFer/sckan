import React from 'react';
import { shallow } from 'enzyme';

import ProjectForm from 'features/project/screens/ProjectForm';

describe('Testing ProjectForm form component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<ProjectForm />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			id: '6786786',
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});