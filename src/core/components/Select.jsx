import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from 'core/components/Icon';

Select.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	values: PropTypes.arrayOf(Object).isRequired,
	defaultOption: PropTypes.string,
	icon: PropTypes.string,
	options: PropTypes.object,
	valueAs: PropTypes.string,
	titleAs: PropTypes.string,
};

function Select(props) {
	const { 
		title, 
		className,
		values,
		defaultOption, 
		icon,
		options,
		valueAs,
		titleAs,
		...rest 
	} = props;

	useEffect(() => {
		const elems = document.querySelectorAll('select');
		M.FormSelect.init(elems, options);
	}, [values, props.value]);
	
	function renderOptions() {
		if (values.length <= 0)
			return <option value="" disabled selected>No data found!</option>

		return values.map((e, i) => (
			<option key={i} value={valueAs ? e[valueAs] : e.value}>
				{titleAs ? e[titleAs] : e.title}
			</option>
		));
	}

	function renderDefaultOption() {
		if (!defaultOption || values.length === 0)
			return null;

		return (
			<option value="" disabled selected>{defaultOption}</option>
		);
	}

	function renderIcon() {
		if (!icon)
			return null;

		return (
			<Icon className="prefix"
				color="grey-text">
				{icon}
			</Icon>
		);
	}

	return (
		<div className={`input-field ${className}`}>
			{renderIcon()}
			<select {...rest}>
				{renderDefaultOption()}
				{renderOptions()}
			</select>
			<label>{title}</label>
		</div>
	);
}

export default Select;
