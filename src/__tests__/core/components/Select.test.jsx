import React from 'react';
import { shallow } from 'enzyme';

import Select from 'core/components/Select';

describe('Testing Select core component', () => {
	it('should render correctly', () => {
		let values = [
			{ title: 'option1', value: 'opt1' },
			{ title: 'option2', value: 'opt2' },
			{ title: 'option3', value: 'opt3' },
		];
		
		const wrapper = shallow(
			<Select title="select test"
				values={values} />
		);

		expect(wrapper.debug()).toMatchSnapshot();
		
		values = [
			{ title: 'option4', value: 'opt4' },
			{ title: 'option5', value: 'opt5' },
		];

		wrapper.setProps({
			title: 'testing',
			values,
			className: 'col s12',
			defaultOption: 'select a option',
			icon: 'business',
			options: {
				classes: 'teal',
			},
		});
		
		expect(wrapper.debug()).toMatchSnapshot();
	});
});