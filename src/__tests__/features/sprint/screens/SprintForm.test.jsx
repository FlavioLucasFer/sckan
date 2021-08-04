import React from 'react';
import { shallow } from 'enzyme';

import SprintForm from 'features/sprint/screens/SprintForm';

describe('Testing SprintForm form component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<SprintForm />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			id: '6786786',
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});