import React from 'react';
import { shallow } from 'enzyme';

import Companies from 'features/company/screens/Companies';
import { COMPANY_FORM_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Companies screen component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	it('should render correctly', () => {
		const wrapper = shallow(
			<Companies />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to company form screen when clink on "add" button', () => {
		const wrapper = shallow(
			<Companies />
		);

		wrapper.find({ formRoute: COMPANY_FORM_ROUTE })
			.dive()
			.find('.new-item-button')
			.simulate('click')

		expect(mockHistory.push).toBeCalledWith(COMPANY_FORM_ROUTE);
	});
});
