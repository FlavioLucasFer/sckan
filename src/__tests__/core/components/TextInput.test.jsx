import React from 'react';
import { shallow } from 'enzyme';

import TextInput from 'core/components/TextInput';

describe('Testing TextInput core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<TextInput />
		);

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			title: 'textinput test',
			value: 'test@mail.com',
			className: 'teal',
			inputClassName: 'grey-text',
			icon: 'visibility',
			validate: true,
			validateBy: 'email',
			mandatory: true,
			dataError: 'testing error',
			dataSuccess: 'testing success',
		});

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			value: '',
		});

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.find('input').simulate('focus');

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			value: '12312312312',
			validate: true,
			validateBy: 'cpf',
		});

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			value: '47057888007',
			validate: true,
			validateBy: 'cpf',
		});

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.setProps({
			value: '',
			validateBy: 'cpf',
			mask: 'cpf',
		});

		expect(wrapper.debug()).toMatchSnapshot();

		wrapper.find('input').simulate('change', '47057888007');

		expect(wrapper.debug()).toMatchSnapshot();
	});
});