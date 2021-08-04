import React from 'react';
import { shallow } from 'enzyme';

import Login from 'features/login/Login';
import { HOME_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Login screen component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Login />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigato to home screen when click on sign-in button', () => {
		const wrapper = shallow(
			<Login />
		);

		wrapper.find({ id: 'signin-button' }).simulate('click');

		expect(mockHistory.push).toBeCalledWith(HOME_ROUTE);
	});
});