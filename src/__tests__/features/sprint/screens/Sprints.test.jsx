import React from 'react';
import { shallow } from 'enzyme';

import Sprints from 'features/sprint/screens/Sprints';
import { SPRINT_FORM_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Sprints screen component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should render correctly', () => {
		const wrapper = shallow(
			<Sprints />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to sprint form screen when clink on "add" button', () => {
		const wrapper = shallow(
			<Sprints />
		);

		wrapper.find({ formRoute: SPRINT_FORM_ROUTE })
			.dive()
			.find('.new-item-button')
			.simulate('click')

		expect(mockHistory.push).toBeCalledWith(SPRINT_FORM_ROUTE);
	});
});
