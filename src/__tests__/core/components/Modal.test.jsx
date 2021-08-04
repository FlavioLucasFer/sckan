import React from 'react';
import { shallow } from 'enzyme';

import Modal from 'core/components/Modal';

describe('Testing Modal core component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Modal title="modal test">
				<h2>testing</h2>
			</Modal>
		);

		expect(wrapper.debug()).toMatchSnapshot();

		const actions = [
			{ title: 'action1', className: 'red', href: 'hreftest1' },
			{ title: 'action2', className: 'green', href: 'hreftest2' },
			{ title: 'action3', className: 'teal', href: 'hreftest3' },
		];

		const options = {
			opacity: 0.9,
			inDuration: 750,
			onOpenStart: () => console.log('testing modal options'),
		};

		wrapper.setProps({
			title: 'testing modal',
			className: 'teal',
			actions,
			options,
		});

		expect(wrapper.debug()).toMatchSnapshot();
	});
});