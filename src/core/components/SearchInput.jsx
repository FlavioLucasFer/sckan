import React, { useState } from 'react';
import PropTypes from 'prop-types';

SearchInput.propTypes = {
	onChange: PropTypes.func,
};

function SearchInput({onChange}) {
	const [value, setValue] = useState('');

	function handleChange(e) {
		const { value } = e.target;
		setValue(value);

		if (onChange) {
			onChange(value);
		}
	}

	function handleClear() {
		setValue('');
	}

	return (
		<div className="nav-wrapper grey lighten-5"
			data-testid="search-bar"
			style={{ borderRadius: '5px', lineHeight: '50px' }}>
			<form onSubmit={e => e.preventDefault()}>
				<div className="input-field">
					<input className="grey lighten-5"
						id="search" 
						type="search" 
						value={value}
						onChange={handleChange} />
					<label className="label-icon vertical-center-content" htmlFor="search">
						<i className="material-icons-round">
							search
						</i>
					</label>
					<i className="material-icons vertical-center-content"
						onClick={handleClear}>
						cancel
					</i>
				</div>
			</form>
		</div>
	);
}

export default SearchInput;