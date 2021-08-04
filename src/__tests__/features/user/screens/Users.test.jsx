import React from 'react';
import { shallow } from 'enzyme';

import Users from 'features/user/screens/Users';
import { USER_FORM_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Users screen component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should render correctly', () => {
		const wrapper = shallow(
			<Users />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to user form screen when clink on "add" button', () => {
		const wrapper = shallow(
			<Users />
		);

		wrapper.find({ formRoute: USER_FORM_ROUTE })
			.dive()
			.find('.new-item-button')
			.simulate('click')

		expect(mockHistory.push).toBeCalledWith(USER_FORM_ROUTE);
	});
});
