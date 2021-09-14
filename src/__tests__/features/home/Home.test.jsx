import React from 'react';
import { shallow } from 'enzyme';

import Home from 'features/home/Home';
import { 
	COMPANY_FORM_ROUTE, 
	COMPANY_ROUTE, 
	PROJECT_FORM_ROUTE, 
	PROJECT_ROUTE, 
	SPRINT_FORM_ROUTE, 
	SPRINT_ROUTE, 
	TASK_FORM_ROUTE, 
	TASK_ROUTE, 
	USER_FORM_ROUTE, 
	USER_ROUTE,
	USER_SITTINGS,
} from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Home screen component', () => {
	function testCardNavigation(cardId, route) {
		const wrapper = shallow(
			<Home />
		);

		wrapper.find({ id: cardId })
			.dive()
			.find('.card-panel')
			.simulate('click');

		expect(mockHistory.push).toBeCalledWith(route);

	}
	
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	it('should render correctly', () => {
		const wrapper = shallow(
			<Home />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to task form screen when click on add task card', () => {
		testCardNavigation('add-task-card', TASK_FORM_ROUTE);
	});

	it('should navigate to tasks list screen when click on list tasks card', () => {
		testCardNavigation('tasks-list-card', TASK_ROUTE);
	});

	it('should navigate to user form screen when click on add user card', () => {
		testCardNavigation('add-user-card', USER_FORM_ROUTE);
	});

	it('should navigate to users list screen when click on list users card', () => {
		testCardNavigation('users-list-card', USER_ROUTE);
	});

	it('should navigate to company form screen when click on add company card', () => {
		testCardNavigation('add-company-card', COMPANY_FORM_ROUTE);
	});

	it('should navigate to companies list screen when click on list companies card', () => {
		testCardNavigation('companies-list-card', COMPANY_ROUTE);
	});

	it('should navigate to sprint form screen when click on add sprint card', () => {
		testCardNavigation('add-sprint-card', SPRINT_FORM_ROUTE);
	});

	it('should navigate to sprints list screen when click on list sprints card', () => {
		testCardNavigation('sprints-list-card', SPRINT_ROUTE);
	});

	it('should navigate to project form screen when click on add project card', () => {
		testCardNavigation('add-project-card', PROJECT_FORM_ROUTE);
	});

	it('should navigate to projects list screen when click on list projects card', () => {
		testCardNavigation('projects-list-card', PROJECT_ROUTE);
	});

	it('should navigate to user settings screen when click on settings card', () => {
		testCardNavigation('user-settings-card', USER_SITTINGS);
	});
});