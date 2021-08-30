import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import FormScreen from 'core/components/FormScreen';
import useFormInput from 'core/hooks/useFormInput';
import TextInput from 'core/components/TextInput';
import Select from 'core/components/Select';
import { USER_ROUTE } from 'core/utils/routes';

import userService from 'features/user/domain/service';
import userModel from 'features/user/domain/model';

import { setUsers } from 'redux/reducers/users';

function UserForm() {
	const dispatch = useDispatch();
	const location = useLocation();
	
	const [user, setUser] = useState({});
	const name = useFormInput();
	const login = useFormInput();
	const password = useFormInput();
	const cpf = useFormInput();
	const companyPosition = useFormInput();
	const company = useFormInput();
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	
	const companies = useSelector(state => state.companies.value);

	useEffect(() => {
		if (location.state) {
			function fakeTarget(value) {
				return {
					target: {
						value,
					},
				};
			}
			
			const user = location.state.data;
			setUser(user);
			
			name.onChange(fakeTarget(user.name));
			login.onChange(fakeTarget(user.login));
			cpf.onChange(fakeTarget(user.cpf));
			companyPosition.onChange(fakeTarget(user.companyPosition));
			company.onChange(fakeTarget(user.company));
		}
	}, []);

	const companyPositions = [
		{ title: 'Scrum Master', value: 'SM' },
		{ title: 'Product Owner', value: 'PO' },
		{ title: 'Developer', value: 'DV' },
		{ title: 'Admin', value: 'AD' },
	];

	function handlePasswordVisilityIconClick() {
		setPasswordIsVisible(!passwordIsVisible);
	}

	async function handleSave() {
		const User = userModel(
			user.id,
			name.value,
			login.value,
			password.value,
			cpf.value,
			companyPosition.value,
			company.value,
		);

		try {
			await userService.save(User);
			await refreshUsers();
		} catch (err) {
			console.log('err:', err);
		}
	}

	async function refreshUsers() {
		const users = await userService.find();
		dispatch(setUsers(users));
	}

	return (
		<FormScreen title="User"
			id={user.id}
			backRoute={USER_ROUTE}
			onSave={handleSave}>
			<div className="row">
				<TextInput {...name}
					title="Name"
					className="col s12 m6 l8"
					type="text"
					icon="account_box"
					validate
					mandatory
					required />

				<TextInput {...cpf}
					title="CPF"
					className="col s12 m6 l4"
					type="text"
					icon="assignment_ind"
					mask="cpf"
					validateBy="cpf"
					validate
					mandatory
					required />

				<TextInput {...login}
					title="Login"
					className="col s12 m6"
					type="text"
					icon="login"
					validate
					mandatory
					required />

				<TextInput {...password}
					title="Password"
					className="col s12 m6"
					type={passwordIsVisible ? 'text' : 'password'}
					icon={passwordIsVisible ? 'visibility_off' : 'visibility'}
					validate={!user}
					mandatory={!user}
					required={!user}
					iconClick={handlePasswordVisilityIconClick} />
			</div>

			<div className="row">
				<Select {...companyPosition}
					title="Company position"
					className="col s12 m6 l4"
					values={companyPositions}
					defaultOption="Select a company position"
					icon="badge" />

				<Select {...company}
					title="Company"
					className="col s12 m6 l4"
					values={companies}
					valueAs="id"
					titleAs="companyName"
					defaultOption="Select a company"
					icon="business" />
			</div>
		</FormScreen>
	);
}

export default UserForm;
