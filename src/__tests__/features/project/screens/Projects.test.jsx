import React from 'react';
import { shallow } from 'enzyme';

import Projects from 'features/project/screens/Projects';
import { PROJECT_FORM_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Projects screen component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should render correctly', () => {
		const wrapper = shallow(
			<Projects />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to project form screen when clink on "add" button', () => {
		const wrapper = shallow(
			<Projects />
		);

		wrapper.find({ formRoute: PROJECT_FORM_ROUTE })
			.dive()
			.find('.new-item-button')
			.simulate('click')

		expect(mockHistory.push).toBeCalledWith(PROJECT_FORM_ROUTE);
	});
});
