import React from 'react';
import { shallow } from 'enzyme';

import CardPanel from 'core/components/CardPanel';

describe('Testing CardPanel core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<CardPanel>
				<h2>testing</h2>
			</CardPanel>
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			backgroundColor: 'teal',
			className: 'col s12',
			cardClassName: 'col s12',
			tooltipPosition: 'right',
			tooltip: 'testing',
			onClick: () => console.log('testing'),
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});