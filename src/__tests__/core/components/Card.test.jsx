import React from 'react';
import { shallow } from 'enzyme';

import Card from 'core/components/Card';

describe('Testing Card core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Card title="test">
				<h1>testing</h1>
			</Card>
		);

		expect(wrapper.debug()).toMatchSnapshot();

		const actions = [
			{ title: 'test1', href: 'test1' },
			{ title: 'test2', href: 'test2' },
			{ title: 'test3', href: 'test3' },
		];

		wrapper.setProps({
			title: 'testing',
			className: 's12',
			cardClassName: 'col s12',
			cardTitleClassName: 'bold-text',
			backgroundColor: 'teal',
			textColor: 'grey-text',
			actions,
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});