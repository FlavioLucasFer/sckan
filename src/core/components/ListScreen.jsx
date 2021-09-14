import './css/ListScreen.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ConfirmActionModal from 'core/modals/ConfirmActionModal';
import SearchInput from 'core/components/SearchInput';
import Collection from 'core/components/Collection';
import Pagination from 'core/components/Pagination';
import CardPanel from 'core/components/CardPanel';
import Button from 'core/components/Button';
import Icon from 'core/components/Icon';

import { setCurrentScreen } from 'redux/reducers/currentScreen';

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
	formRoute: PropTypes.string.isRequired,
	singularTitle: PropTypes.string.isRequired,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	afterRemove: PropTypes.func,
};

function Actions(props) {
	const { 
		selectedItem,
		formRoute,
		singularTitle,
		onEdit,
		onRemove,
		afterRemove,
	} = props;

	const { push } = useHistory();
	const dispatch = useDispatch();

	if (isEmpty(selectedItem))
		return null;

	function handleEditIconClick() {
		if (onEdit) {
			onEdit();
		} 

		push(formRoute, { data: selectedItem });
		dispatch(setCurrentScreen(formRoute));
	}

	async function handleRemove() {
		try {
			if (onRemove) {
				await onRemove(selectedItem.id);
				afterRemove();
			}
		} catch (err) {
			console.log('err:', err);
		}
	}

	return (
		<div className="row actions">
			<Icon className="action"
				type="round"
				size="small"
				color="yellow-text text-lighten-1"
				onClick={handleEditIconClick} >
				edit
			</Icon>

			<Icon className="action modal-trigger"
				href="#confirm-delete-modal"
				type="round"
				size="small"
				color="red-text text-lighten-1">
				delete
			</Icon>

			<ConfirmActionModal id="confirm-delete-modal"
				title={`Are you sure you want to delete this ${singularTitle.toLowerCase()}?`}
				onConfirm={handleRemove} />
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

	const identifier = selectedItem[identifierField];

	return (
		<div className="item-informations-container">
			<h5>
				{identifier}
			</h5>

			<div className="divider white" />

			{fields.map((e, i) => (
				<p key={i} 
					className="ellipsis-text"
					title={e.title}>
					<span>{e.title}</span>
					<br />
					{e.formater ? e.formater(selectedItem[e.field]) : selectedItem[e.field]}
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
	itemsQuantityByPage: PropTypes.number.isRequired,
	onRefresh: PropTypes.func,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func,
	filters: PropTypes.element,
	onFilter: PropTypes.func,
	filterButtonDisabled: PropTypes.bool,
	contentMessage: PropTypes.string,
};

function ListScreen(props) {
	const {
		title,
		singularTitle,
		data,
		fields,
		identifierField,
		formRoute,
		itemsQuantityByPage,
		onRefresh,
		onEdit,
		onRemove,
		filters,
		onFilter,
		filterButtonDisabled,
		contentMessage,
	} = props;

	const { push } = useHistory();
	const dispatch = useDispatch();
	const [searchedData, setSearchedData] = useState('');
	const [dataCopy, setDataCopy] = useState(data); 
	const [selectedItem, setSelectedItem] = useState({});
	const [pagesQuantity, setPagesQuantity] = useState(1); 
	const [dataSlice, setDataSlice] = useState([0, 10]);

	useEffect(()=> {
		setDataCopy(data);

		const pagesQuantity = Math.ceil(data.length / itemsQuantityByPage);

		if (pagesQuantity > 1) {
			setPagesQuantity(pagesQuantity);
		}
	}, [data]);

	function handleNavigationToForm() {
		push(formRoute);
		dispatch(setCurrentScreen(formRoute));
	}

	function handleSelection(item) {
		setSelectedItem(item);
	}

	async function handleRefresh() {
		if (onRefresh) {
			await onRefresh();
			setSearchedData('');
			setDataCopy(data);
		}
	}

	function handleSearchInputChange(e) {
		const { value } = e.target;
		const dataCopy = data.filter(e => e[identifierField].toLowerCase().search(value) === 0);

		setSearchedData(value);
		setDataCopy(dataCopy);
	}

	function handleSearchInputClear() {
		setSearchedData('');
		setDataCopy(data);
	}

	async function afterRemove() {
		setSelectedItem({});
	}

	function handleGoNextPage() {
		setDataSlice([dataSlice[0] + 10, dataSlice[1] + 10]);
	}
	
	function handleGoPreviousPage() {
		setDataSlice([dataSlice[0] - 10, dataSlice[1] - 10]);
	}

	function handlePageClick(page) {
		const start = (page - 1) * 10;
		setDataSlice([start, start + 10]);
	}

	function renderContent() {
		if (contentMessage) {
			return (
				<h3 className="grey-text bold-text">{contentMessage}</h3>
			);
		}
		
		if (isEmpty(data)) {
			return (
				<h3 className="grey-text bold-text">No {title.toLowerCase()} found!</h3>
			);
		}

		return (
			<div className="row">
				<div className="col s12 m6">
					<div className="row" style={{ height: '80px' }}>
						<div className="col s8">
							<SearchInput value={searchedData}
								onChange={handleSearchInputChange}
								onClear={handleSearchInputClear} />
						</div>
						<div className="col s2 vertical-center-content">
							<Icon type="round"
								className="waves-effect waves-light refresh-button"
								size="small"
								color="grey-text text-darken-3"
								tooltip={`Refresh ${title.toLowerCase()} list`}
								tooltipPosition="top"
								style={{ cursor: 'pointer' }}
								onClick={handleRefresh}>
								refresh
							</Icon>
						</div>
					</div>

					<Collection items={dataCopy.slice(dataSlice[0], dataSlice[1])}
						identifier={identifierField}
						onSelect={handleSelection} />

					<Pagination pagesQuantity={pagesQuantity}
						goNext={handleGoNextPage}
						goPrevious={handleGoPreviousPage}
						onPageClick={handlePageClick} />
				</div>
				<div className="col s12 m6">
					<CardPanel className="col s12"
						cardClassName={`data-card teal ${isEmpty(selectedItem) ? 'lighten-4' : 'accent-4'}`}>
						<NoSelectedItemMessage selectedItem={selectedItem} 
							singularTitle={singularTitle} />
						<span className="item-id">{selectedItem.id ? `#${selectedItem.id}` : ''}</span>
						<Actions selectedItem={selectedItem}
							formRoute={formRoute}
							singularTitle={singularTitle}
							onEdit={onEdit}
							onRemove={onRemove}
							afterRemove={afterRemove} />
						<SelectedItemInformations selectedItem={selectedItem}
							identifierField={identifierField}
							fields={fields} />
					</CardPanel>
				</div>
			</div>
		);
	}

	function renderFiltersRow() {
		if (!filters || filters.length < 0)
			return null;
		
		return (
			<CardPanel className="col s12"
				cardClassName="row filters-card">
				<div className="row no-margin">
					{filters}

					<div className="col s12 m2" style={{ margin: 'auto 0' }}>
						<Button title="Filter"
							color="teal accent-4"
							size="medium"
							disabled={filterButtonDisabled}
							icon={{
								name: 'filter_list',
								className: 'left bold-text',
								type: 'round',
								color: 'white-text',
							}}
							onClick={onFilter} />
					</div>
				</div>
			</CardPanel>
		);
	}

	return (
		<section>
			<h2 className="screen-title grey-text text-darken-3">
				{title}

				<Button id="new-item-button"
					className={`new-item-button ${(isEmpty(data) && !contentMessage) && 'pulse'}`}
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

			{renderFiltersRow()}

			<CardPanel className="s12 div-card-container"
				cardClassName="card-container">
				{renderContent()}
			</CardPanel>
		</section>
	);
}

export default ListScreen;
