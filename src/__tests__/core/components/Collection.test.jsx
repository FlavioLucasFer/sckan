import React from 'react';
import { shallow } from 'enzyme';

import Collection from 'core/components/Collection';

describe('Testing Collection core component', () => {
	const items = [
		{
			id: 1213,
			companyName: 'Testing',
			tradingName: 'Hard code test',
			federalDocument: '111.111.111-11',
			email: 'mail@email.com',
		}, {
			companyName: 'bbb',
			id: 1345,
			federalDocument: '131.131.131-13',
			email: 'amail123@email.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
			tradingName: 'absdbstsh',
		}, {
			companyName: 'ssahsas',
			id: 1818,
			federalDocument: '121.121.121-12',
			email: 'mail123@email.com',
			tradingName: 'Hash',
		},
	];

	it('should render correctly', () => {
		const wrapper = shallow(
			<Collection items={items}
				identifier="companyName" />
		);
		
		expect(wrapper.debug()).toMatchSnapshot();
	});
	
	it('should select list item on click', () => {
		const wrapper = shallow(
			<Collection items={items}
				identifier="companyName"
				onSelect={onSelect} />
		);

		let selectedItem;

		function onSelect(item) {
			selectedItem = item;
		}

		wrapper.find({ id: 1 }).simulate('click');

		expect(selectedItem).toBe(items[1]);
		expect(wrapper.find({ id: 1 }).hasClass('active')).toBeTruthy();
		expect(wrapper.find({ id: 0 }).hasClass('active')).toBeFalsy();
	});
});