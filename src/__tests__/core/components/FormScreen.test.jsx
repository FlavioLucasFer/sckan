import React from 'react';
import { shallow } from 'enzyme';

import FormScreen from 'core/components/FormScreen';
import { COMPANY_FORM_ROUTE, COMPANY_ROUTE } from 'core/utils/routes';

const mockHistory = {
	goBack: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing FormScreen core component', () => {
	afterAll(() => {
		jest.resetAllMocks();
	});

	function testGoBackCall(modalId, buttonId, times) {
		const wrapper = shallow(
			<FormScreen title="testing goBack">
				<div>
					<h3>test</h3>
				</div>
			</FormScreen>
		);

		wrapper.find({ id: modalId })
			.dive()
			.find({ id: modalId })
			.dive()
			.find({ id: buttonId })
			.simulate('click');

		expect(mockHistory.goBack).toBeCalledTimes(times);
	}
	
	it('should render correctly', () => {
		const wrapper = shallow(
			<FormScreen title="form screen test">
				<h2>testing</h2>
			</FormScreen>
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			title: 'testing',
			id: 1818,
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should call goBack function only 1 time by confirm save', () => {
		testGoBackCall('confirm-save-modal', 'confirm-action', 1);
	});

	it('should call goBack function only 1 time by confirm discard', () => {
		testGoBackCall('confirm-discard-modal', 'confirm-action', 1);
	});

	it('should not call goBack function by deny save', () => {
		testGoBackCall('confirm-save-modal', 'deny-action', 0);
	});

	it('should not call goBack function by deny discard', () => {
		testGoBackCall('confirm-discard-modal', 'deny-action', 0);
	});
});