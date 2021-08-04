import React from 'react';
import { shallow } from 'enzyme';

import App from 'features/app/App';

describe('Testing App screen component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<App />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});
});