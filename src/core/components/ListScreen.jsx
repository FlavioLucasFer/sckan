import './css/ListScreen.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';

import Collection from 'core/components/Collection';
import CardPanel from 'core/components/CardPanel';
import Icon from 'core/components/Icon';
import Button from 'core/components/Button';
import Pagination from 'core/components/Pagination';
import SearchInput from 'core/components/SearchInput';

NoSelectedItemMessage.propTypes = {
	selectedItem: PropTypes.object.isRequired,
	singularTitle: PropTypes.string.isRequired,
};

function NoSelectedItemMessage({ selectedItem, singularTitle }) {
	if (!isEmpty(selectedItem))
		return null;

	return (
		<h4 className="no-selected-item-message grey-text text-darken-3">
			Select some {singularTitle.toLowerCase()} to see its informations!
		</h4>
	);
}

Actions.propTypes = {
	selectedItem: PropTypes.object.isRequired,
};

function Actions({ selectedItem }) {
	if (isEmpty(selectedItem))
		return null;

	return (
		<div className="row actions">
			<Icon className="edit-action"
				type="round"
				size="small"
				color="yellow-text text-lighten-1" >
				edit
			</Icon>
			<Icon className="delete-action"
				type="round"
				size="small"
				color="red-text text-lighten-1">
				delete
			</Icon>
		</div>
	);
}

SelectedItemInformations.propTypes = {
	selectedItem: PropTypes.object.isRequired,
	identifierField: PropTypes.string.isRequired,
	fields: PropTypes.arrayOf(Object).isRequired,
};

function SelectedItemInformations({ selectedItem, identifierField, fields }) {
	if (isEmpty(selectedItem))
		return null;

	const {
		id,
	} = selectedItem;

	const identifier = selectedItem[identifierField];

	return (
		<div className="item-informations-container">
			<h5>
				<span className="item-id">#{id}</span>
				{identifier}
			</h5>

			<div className="divider white" />

			{fields.map((e, i) => (
				<p key={i} 
					className="ellipsis-text"
					title={e.title}>
					<span>{e.title}</span>
					<br />
					{selectedItem[e.field]}
				</p>
			))}
		</div>
	);
}

ListScreen.propTypes = {
	title: PropTypes.string.isRequired,
	singularTitle: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(Object).isRequired,
	fields: PropTypes.arrayOf(Object).isRequired,
	identifierField: PropTypes.string.isRequired, 
	formRoute: PropTypes.string.isRequired,
	pagesQuantity: PropTypes.number.isRequired,
	onRefresh: PropTypes.func,
};

function ListScreen(props) {
	const {
		title,
		singularTitle,
		data,
		fields,
		identifierField,
		formRoute,
		pagesQuantity,
		onRefresh,
	} = props;

	const { push } = useHistory();
	const [selectedItem, setSelectedItem] = useState({});

	function handleNavigationToForm() {
		push(formRoute);
	}

	function handleSelection(item) {
		setSelectedItem(item);
	}

	function renderContent() {
		if (isEmpty(data))
			return (
				<h3 className="grey-text bold-text">No {title.toLowerCase()} found!</h3>
			);

		return (
			<div className="row">
				<div className="col s12 m6">
					<div className="row" style={{ height: '80px' }}>
						<div className="col s8">
							<SearchInput />
						</div>
						<div className="col s2 vertical-center-content">
							<Icon type="round"
								size="small"
								color="grey-text text-darken-3"
								tooltip={`Refresh ${title.toLowerCase()} list`}
								tooltipPosition="top"
								style={{ cursor: 'pointer' }}
								onClick={onRefresh}>
								refresh
							</Icon>
						</div>
					</div>

					<Collection items={data}
						identifier={identifierField}
						onSelect={handleSelection} />

					<Pagination pagesQuantity={pagesQuantity} />
				</div>
				<div className="col s12 m6">
					<CardPanel className="col s12"
						cardClassName={`data-card teal ${isEmpty(selectedItem) ? 'lighten-4' : 'accent-4'}`}>
						<NoSelectedItemMessage selectedItem={selectedItem} 
							singularTitle={singularTitle} />
						<Actions selectedItem={selectedItem} />
						<SelectedItemInformations selectedItem={selectedItem}
							identifierField={identifierField}
							fields={fields} />
					</CardPanel>
				</div>
			</div>
		);
	}

	return (
		<section>
			<h2 className="screen-title grey-text text-darken-3">
				{title}

				<Button id="new-item-button"
					className={`new-item-button ${isEmpty(data) && 'pulse'}`}
					type="floating"
					color="teal accent-4"
					size="large"
					tooltip="New company"
					tooltipPosition="right"
					icon={{
						name: 'add',
						className: 'left bold-text',
						type: 'round',
						color: 'white-text',
					}}
					onClick={handleNavigationToForm} />
			</h2>

			<CardPanel className="s12 div-card-container"
				cardClassName="card-container">
				{renderContent()}
			</CardPanel>
		</section>
	);
}

export default ListScreen;
