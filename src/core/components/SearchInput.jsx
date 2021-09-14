import React from 'react';
import PropTypes from 'prop-types';

SearchInput.propTypes = {
	onClear: PropTypes.func,
};

function SearchInput(props) {
	const { 
		onClear, 
		...rest
	} = props;

	return (
		<div className="nav-wrapper grey lighten-5"
			data-testid="search-bar"
			style={{ borderRadius: '5px', lineHeight: '50px' }}>
			<form onSubmit={e => e.preventDefault()}>
				<div className="input-field">
					<input {...rest}
						className="grey lighten-5"
						id="search" 
						type="search" />
					<label className="label-icon vertical-center-content" htmlFor="search">
						<i className="material-icons-round">
							search
						</i>
					</label>
					<i className="material-icons vertical-center-content"
						onClick={onClear}>
						cancel
					</i>
				</div>
			</form>
		</div>
	);
}

export default SearchInput;