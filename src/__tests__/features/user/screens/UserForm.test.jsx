import React from 'react';
import { shallow } from 'enzyme';

import UserForm from 'features/user/screens/UserForm';

describe('Testing UserForm form component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<UserForm />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			id: '98890890',
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should exchange icon and input type when click on password input icon', () => {
		const wrapper = shallow(
			<UserForm />
		);

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.type
		).toBe('password');

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.icon
		).toBe('visibility');


		wrapper.find({ title: 'Password' })
			.dive()
			.find('Icon')
			.dive()
			.simulate('click');

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.type
		).toBe('text');

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.icon
		).toBe('visibility_off');

		wrapper.find({ title: 'Password' })
			.dive()
			.find('Icon')
			.dive()
			.simulate('click');

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.type
		).toBe('password');

		expect(
			wrapper.find({ title: 'Password' })
				.props()
				.icon
		).toBe('visibility');
	});
});