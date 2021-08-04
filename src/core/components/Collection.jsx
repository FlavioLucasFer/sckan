import './css/Collection.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

Collection.propTypes = {
	items: PropTypes.arrayOf(Object).isRequired,
	identifier: PropTypes.string.isRequired,
	onSelect: PropTypes.func,
};

function Collection(props) {
	const {
		items,
		identifier,
		onSelect,
	} = props;

	const [activeItem, setActiveItem] = useState(-1);

	function renderId(item, index) {
		if (!item.id) {
			return;
		}

		return (
			<span className={`item-id ${!isActive(index) && 'grey-text text-darken-3'}`} >#{item.id}</span>
		);
	}

	function isActive(index) {
		return index === activeItem;
	}

	function handleListItemClick(index) {
		setActiveItem(index);

		if (onSelect)
			onSelect(items[index]);
	}

	return (
		<ul className="collection">
			{items.map((e, i) => (
				<li key={i} 
					id={i}
					className={`collection-item ${isActive(i) && 'active'}`}
					onClick={() => handleListItemClick(i)}>
					{renderId(e, i)}
					{e[identifier]}
				</li>
			))}
		</ul>
	);
}

export default Collection;