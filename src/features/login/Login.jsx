import './Login.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useFormInput from 'core/hooks/useFormInput';
import CardPanel from 'core/components/CardPanel';
import TextInput from 'core/components/TextInput';
import Button from 'core/components/Button';
import isAdmin from 'core/helpers/isAdmin';
import { HOME_ROUTE } from 'core/utils/routes';

import projectService from 'features/project/domain/service';
import companyService from 'features/company/domain/service';
import userService from 'features/user/domain/service';

import { setCurrentScreen } from 'redux/reducers/currentScreen';
import { setProductOwners } from 'redux/reducers/productOwners';
import { setScrumMasters } from 'redux/reducers/scrumMasters';
import { setDevelopers } from 'redux/reducers/developers';
import { setCompanies } from 'redux/reducers/companies';
import { setProjects } from 'redux/reducers/projects';
import { setCompany } from 'redux/reducers/company';
import { setUsers } from 'redux/reducers/users';
import { setUser } from 'redux/reducers/user';

function Login() {
	const userIndentification = useFormInput();
	const userPassword = useFormInput();

	const dispatch = useDispatch();
	const { push } = useHistory();

  async function handleSignIn() {
		try {
			const data = await userService.signIn(userIndentification.value, userPassword.value);

			if (data.auth) {
				const { user } = data;
				user.token = data.token;

				dispatch(setUser(user));

				await getCompany(user.company);

				push(HOME_ROUTE);
				dispatch(setCurrentScreen(HOME_ROUTE));
			} else {
				console.log('err:', data.message);
			}
		} catch (err) {
			console.log('err:', err);			
		}
  }

	async function getCompany(id) {
		try {
			const company = await companyService.findById(id);
			dispatch(setCompany(company));
		} catch (err) {
			throw err;
		}
	}

	return (
		<section className="row"
			style={{ height: '100%' }}>
			<div className="col s12 m6 l7 left-col" >
				<h1 className="app-name" data-testid="app-name">Sckan</h1>
			</div>

			<div className="col s12 m6 l5 teal right-col">
				<div className="row flex h-center">
					<div className="col s12 l11 xl8 no-margin">
						<CardPanel>
							<TextInput {...userIndentification}
								title="User identification"
								className="col s12"
								validate
								mandatory
								required />

							<TextInput {...userPassword}
								className="col s12"
								title="Password"
								type="password"
								password
								validate
								mandatory
								required />
								
							<Button id="signin-button"
								title="Sign-in"
								className="cyan accent-3 signin-button"
								data-testid="signin-button"
                onClick={handleSignIn} />
						</CardPanel>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;