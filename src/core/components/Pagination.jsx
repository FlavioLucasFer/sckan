import './css/Pagination.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
	pagesQuantity: PropTypes.number.isRequired,
};

function Pagination(props) {
	const {
		pagesQuantity,
	} = props;

	const [activePage, setActivePage] = useState(1);
		
	function renderPages() {
		const listItems = [];

		for (let i = 1; i <= pagesQuantity; i++) {
			listItems.push(
				<li key={i} 
					className={`${activePage === i ? 'active active-page' : 'waves-effect'}`}
					onClick={() => setActivePage(i)}>
					<a>{i}</a>
				</li>
			);
		}

		return listItems;
	}

	function handleClickOnNextPage() {
		setActivePage(activePage + 1);
	}
	
	function handleClickOnPreviousPage() {
		setActivePage(activePage - 1);
	}

	return (
		<ul className="pagination"
			style={{ textAlign: 'center' }}>
			<li className={activePage === 1 ? 'disabled' : 'waves-effect'}
				onClick={activePage > 1 && handleClickOnPreviousPage}>
				<a><i className="material-icons">chevron_left</i></a>
			</li>
			{renderPages()}
			<li className={activePage === pagesQuantity ? 'disabled' : 'waves-effect'}
				onClick={activePage < pagesQuantity && handleClickOnNextPage}>
				<a><i className="material-icons">chevron_right</i></a>
			</li>
		</ul>
	);
}

export default Pagination;
