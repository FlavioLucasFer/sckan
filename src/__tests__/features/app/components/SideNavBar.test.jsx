import React from 'react';
import { shallow } from 'enzyme';

import SideNavBar from 'features/app/components/SideNavBar';
import { 
	COMPANY_ROUTE, 
	HOME_ROUTE, 
	LOGIN_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_ROUTE, 
	TASK_ROUTE, 
	USER_ROUTE 
} from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

const mockLocation = {
	pathname: 'localhost:3000',
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
	useLocation: () => (mockLocation),
}));

describe('Testing SideNavBar app feature component', () => {
	function testNavigation(route) {
		const wrapper = shallow(
			<SideNavBar />
		);

		wrapper.find({ route })
			.dive()
			.simulate('click');

		expect(mockHistory.push).toBeCalledWith(route);
	}
	
	afterAll(() => {
		jest.resetAllMocks();
	});
	
	it('should render correctly', () => {
		const wraaper = shallow(
			<SideNavBar />
		);

		expect(wraaper.debug()).toMatchSnapshot();
	});

	it('should navigate to home screen when click on home SideNavItem', () => {
		testNavigation(HOME_ROUTE);
	});

	it('should navigate to users list screen when click on users SideNavBar', () => {
		testNavigation(USER_ROUTE);
	});

	it('should navigate to companies list screen when click on companies SideNavBar', () => {
		testNavigation(COMPANY_ROUTE);
	});

	it('should navigate to tasks screen when click on tasks SideNavBar', () => {
		testNavigation(TASK_ROUTE);
	});

	it('should navigate to sprints list screen when click on sprints SideNavBar', () => {
		testNavigation(SPRINT_ROUTE);
	});

	it('should navigate to projects list screen when click on projects SideNavBar', () => {
		testNavigation(PROJECT_ROUTE);
	});

	it('should navigate to login screen when click on logout SideNavBar and confirm logout modal', () => {
		const wrapper = shallow(
			<SideNavBar />
		);

		wrapper.find({ id: 'logout-modal' })
			.dive()
			.find({ id: 'logout-modal' })
			.dive()
			.find({ id: 'logout-modal' })
			.dive()
			.find({ title: 'Yes' })
			.simulate('click');

		expect(mockHistory.push).toBeCalledWith(LOGIN_ROUTE);
	});
});