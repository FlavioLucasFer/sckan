import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListScreen from 'core/components/ListScreen';
import { USER_FORM_ROUTE } from 'core/utils/routes';

import userService from 'features/user/domain/service';

import { setUsers } from 'redux/reducers/users';

function Users() {
	const dispatch = useDispatch();
	const users = useSelector(state => state.users.value);

	const fields = [
		{ title: 'Name', field: 'name' },
		{ title: 'CPF', field: 'cpf' },
		{ title: 'Company position', field: 'companyPosition', formater: formatCompanyPosition },
	];

	useEffect(async () => {
		await getUsers();
	}, []);

	function formatCompanyPosition(e) {
		switch (e) {
			case 'AD':
				return 'Admin';

			case 'SM':
				return 'Scrum Master';
			
			case 'PO':
				return 'Product Owner';
			
			case 'DV':
				return 'Developer';

		}
	}

	async function getUsers() {
		try {
			const users = await userService.find();
			dispatch(setUsers(users));
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function handleRemove(id) {
		try {
			await userService.remove(id);
			await getUsers();
		} catch (err) {
			console.log('err:', err);
		}
	}

  return (
		<ListScreen title="Users"
			singularTitle="User"
			data={users}
			fields={fields}
			identifierField="name"
			itemsQuantityByPage={10}
			formRoute={USER_FORM_ROUTE}
			onRefresh={getUsers}
			onRemove={handleRemove} />
  );
}

export default Users;
