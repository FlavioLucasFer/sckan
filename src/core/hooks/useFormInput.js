import { useState } from 'react';

function useFormInput(initialValue='') {
	const [value, setValue] = useState(initialValue);
	
	function handleChange(e) {
		let { value } = e.target;

		setValue(value);
	}

	return {
		value,
		onChange: handleChange,
	};
}

export default useFormInput;
