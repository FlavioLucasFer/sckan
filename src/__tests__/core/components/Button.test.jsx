import React from 'react';
import { shallow } from 'enzyme';

import Button from 'core/components/Button';

describe('Testing Button core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Button />
		);

		expect(wrapper.debug()).toMatchSnapshot();
		
		wrapper.setProps({
			title: 'testing',
			className: 'grey-text',
			type: 'round',
			color: 'red',
			size: 'small',
			tooltipPosition: 'top',
			tooltip: 'testing',
			icon: {
			name: 'business',
			},
			onClick: () => console.log('testing button'),
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});