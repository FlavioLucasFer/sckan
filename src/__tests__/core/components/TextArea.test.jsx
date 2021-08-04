import React from 'react';
import { shallow } from 'enzyme';

import TextArea from 'core/components/TextArea';

describe('Testing TextArea core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<TextArea />
		);

		expect(wrapper.debug()).toMatchSnapshot();
		
		wrapper.setProps({
			title: 'textarea test',
			className: 'teal',
			icon: 'business',
			length: '255',
		});
		
		expect(wrapper.debug()).toMatchSnapshot();
	});
});