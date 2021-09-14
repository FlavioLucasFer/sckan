import React from 'react';
import { shallow } from 'enzyme';

import LogOutModal from 'features/app/modals/LogOutModal';
import { HOME_ROUTE, LOGIN_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

const mockLocation = {
	pathname: HOME_ROUTE,
}

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
	useLocation: () => (mockLocation),
}));

describe('Testing LogOutModal app feature modal component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	it('should render correctly', () => {
		const wrapper = shallow(
			<LogOutModal id="logout-modal-test" />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to login screen when confirm action', () => {
		const wrapper = shallow(
			<LogOutModal id="logout-modal-test" />
		);

		wrapper.find({ id: 'logout-modal-test' })
			.dive()
			.find({ id: 'logout-modal-test' })
			.dive()
			.find({ title: 'Yes' })
			.simulate('click');

		expect(mockHistory.push).toBeCalledWith(LOGIN_ROUTE);
	});

	it('should stay in current screen when cancel action', () => {
		const wrapper = shallow(
			<LogOutModal id="logout-modal-test" />
		);

		wrapper.find({ id: 'logout-modal-test' })
			.dive()
			.find({ id: 'logout-modal-test' })
			.dive()
			.find({ title: 'No' })
			.simulate('click');

		expect(mockLocation.pathname).toBe(HOME_ROUTE);
	});
});
