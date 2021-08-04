import React from 'react';
import { shallow } from 'enzyme';

import FeatureCard from 'features/home/components/FeatureCard';

describe('Testing FeatureCard home feature component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<FeatureCard icon="business">
				<h2>testing feature card</h2>
			</FeatureCard>
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			icon: 'add',
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});