import React from 'react';
import { shallow } from 'enzyme';

import ConfirmActionModal from 'core/modals/ConfirmActionModal';

describe('Testing ConfirmActionModal core modal component', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<ConfirmActionModal title="confirm action modal test"
				id="confirm-action-modal-test"
				onConfirm={() => console.log('on confirm test')} />
		);

		expect(wrapper.debug()).toMatchSnapshot();
		
		wrapper.setProps({
			title: 'testing',
			onCancel: () => console.log('on cancel test'),
		});
	
		expect(wrapper.debug()).toMatchSnapshot();
	});
});