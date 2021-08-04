import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from 'core/components/SearchInput';

describe('Testing SearchInput core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<SearchInput />
		);

		expect(wrapper.debug()).toMatchSnapshot();
	});

	it('should change value on change action', () => {
		const wrapper = shallow(
			<SearchInput onChange={handleChange} />
		);

		const event = { target: { value: 'test' } };
		let value = ''; 

		function handleChange(v) {
			value = v;
		}

		wrapper.find('input').simulate('change', event);


		expect(value).toBe('test');
		expect(wrapper.find('input').props().value).toBe('test');
	});

	it('should clear input value when click on cancel icon', () => {
		const wrapper = shallow(
			<SearchInput />
		);

		const event = { target: { value: 'testing' } };
	
		wrapper.find('input').simulate('change', event);
		
		expect(wrapper.find('input').props().value).toBe('testing');
		
		wrapper.find({ children: 'cancel' }).simulate('click');
		
		expect(wrapper.find('input').props().value).toBe('');
	});
});