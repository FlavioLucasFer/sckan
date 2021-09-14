import React from 'react';
import { shallow } from 'enzyme';

import Header from 'features/app/components/Header';
import { HOME_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing Header app feature component', () => {
	afterAll(() => {
		jest.resetAllMocks();
	});
	
	it('Should render correctly', () => {
		const wrapper = shallow(
			<Header />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('Should navigate to home screen when click on app logo', () => {
		const wrapper = shallow(
			<Header />
		);

		wrapper.find('.brand-logo').simulate('click');

		expect(mockHistory.push).toBeCalledWith(HOME_ROUTE);
	});
});