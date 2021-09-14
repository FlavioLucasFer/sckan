import React from 'react';
import { shallow } from 'enzyme';

import Icon from 'core/components/Icon';

describe('Testing Icon core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Icon>
				business
			</Icon>
		); 

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			type: 'round',
			size: 'large',
			color: 'grey-text',
			className: 'bold-text',
			tooptipPosition: 'left',
			tooptip: 'testing',
			onClick: () => console.log('icon test'),
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});