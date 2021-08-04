import React from 'react';
import { shallow } from 'enzyme';

import Pagination from 'core/components/Pagination';

describe('Testing Pagination core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Pagination pagesQuantity={10} />
		);

		expect(wrapper.debug()).toMatchSnapshot();
		expect(wrapper.find('li').length).toBe(12);
		expect(wrapper.find('li').at(1).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeTruthy();
		
		wrapper.setProps({
			pagesQuantity: 5,
		});
		
		expect(wrapper.debug()).toMatchSnapshot();
		expect(wrapper.find('li').length).toBe(7);

		expect(wrapper.find({ id: 'goto-previous-page' }).hasClass('disabled')).toBeTruthy();
		expect(wrapper.find({ id: 'goto-next-page' }).hasClass('disabled')).toBeFalsy();
		
		wrapper.setProps({
			pagesQuantity: 1,
		});
		
		expect(wrapper.find({ id: 'goto-previous-page' }).hasClass('disabled')).toBeTruthy();
		expect(wrapper.find({ id: 'goto-next-page' }).hasClass('disabled')).toBeTruthy();
	});

	it('should have only one page active', () => {
		const wrapper = shallow(
			<Pagination pagesQuantity={3} />
		);

		expect(wrapper.find('.active').length).toBe(1);
		expect(wrapper.find('.active-page').length).toBe(1);
	});

	it('should exchange active page when click on other page', () => {
		const wrapper = shallow(
			<Pagination pagesQuantity={6} />
		);

		expect(wrapper.find('li').at(1).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeTruthy();
		
		wrapper.find('li').at(5).simulate('click');
		
		expect(wrapper.find('li').at(1).hasClass('active')).toBeFalsy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeFalsy();
		expect(wrapper.find('li').at(5).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(5).hasClass('active-page')).toBeTruthy();
	});

	it('should exchange active page to next page when click on next page li', () => {
		const wrapper = shallow(
			<Pagination pagesQuantity={8} />
		);

		expect(wrapper.find('li').at(1).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeTruthy();

		wrapper.find({ id: 'goto-next-page' }).simulate('click');

		expect(wrapper.find('li').at(1).hasClass('active')).toBeFalsy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeFalsy();
		expect(wrapper.find('li').at(2).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(2).hasClass('active-page')).toBeTruthy();
	});

	it('should exchange active page to previous page when click on previous page li', () => {
		const wrapper = shallow(
			<Pagination pagesQuantity={8} />
		);

		expect(wrapper.find('li').at(1).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeTruthy();
		
		wrapper.find({ id: 'goto-next-page' }).simulate('click');
		expect(wrapper.find('li').at(1).hasClass('active')).toBeFalsy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeFalsy();
		expect(wrapper.find('li').at(2).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(2).hasClass('active-page')).toBeTruthy();
		
		wrapper.find({ id: 'goto-previous-page' }).simulate('click');
		expect(wrapper.find('li').at(2).hasClass('active')).toBeFalsy();
		expect(wrapper.find('li').at(2).hasClass('active-page')).toBeFalsy();
		expect(wrapper.find('li').at(1).hasClass('active')).toBeTruthy();
		expect(wrapper.find('li').at(1).hasClass('active-page')).toBeTruthy();
	});
});