import React from 'react';
import { shallow } from 'enzyme';

import ListScreen from 'core/components/ListScreen';
import { COMPANY_FORM_ROUTE, USER_FORM_ROUTE } from 'core/utils/routes';

const mockHistory = {
	push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom')),
	useHistory: () => (mockHistory),
}));

describe('Testing ListScreen core component', () => {
	afterAll(() => {
		jest.clearAllMocks();
	});
	
	it('should render correctly', () => {
		const wrapper = shallow(
			<ListScreen title="Users"
				singularTitle="User"
				data={[]}
				fields={[]}
				identifierField=""
				formRoute={USER_FORM_ROUTE}
				pagesQuantity={4} />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		const data = [
			{id: '121414', name: 'test1', description: 'testing1'},
			{id: '676678', name: 'test2', description: 'testing2'},
			{id: 'aasrghikj', name: 'test3', description: 'testing3'},
		];

		const fields = [
			{ title: 'Name field', field: 'name' },
			{ title: 'Description field', field: 'description' },
		];

		wrapper.setProps({
			title: 'Companies',
			sing: 'Company',
			data,
			fields,
			identifierField: 'name',
			formRoute: COMPANY_FORM_ROUTE,
			pagesQuantity: 2,
			onRefresh: () => console.log('onRefresh test'),
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should navigate to form route when click on "add" button', () => {
		const wrapper = shallow(
			<ListScreen title="Users"
				singularTitle="User"
				data={[]}
				fields={[]}
				identifierField=""
				formRoute={USER_FORM_ROUTE}
				pagesQuantity={4} />
		);

		wrapper.find({ id: 'new-item-button' })
			.dive()
			.simulate('click');

		expect(mockHistory.push).toBeCalledWith(USER_FORM_ROUTE);
	});
});