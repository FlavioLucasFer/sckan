import './Login.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import useFormInput from 'core/hooks/useFormInput';
import Button from 'core/components/Button';
import CardPanel from 'core/components/CardPanel';
import TextInput from 'core/components/TextInput';
import { HOME_ROUTE } from 'core/utils/routes';

function Login() {
	const userIndentification = useFormInput();
	const userPassword = useFormInput();
  const { push } = useHistory();

  function handleSignIn() {
    push(HOME_ROUTE);
  }

	return (
		<section id="main-row"
			className="row"
			style={{ height: '100%' }}>
			<div id="left-col" 
				className="col s12 m6 l7 left-col" >
				<h1 className="app-name" data-testid="app-name">Sckan</h1>
			</div>

			<div id="right-col"
				className="col s12 m6 l5 teal right-col">
				<div className="row" id='login-card-row'
					style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="col" id='login-card-col'  
						s={12}
						l={11}
						xl={8}
						style={{ margin: 0 }}>
						<CardPanel id='login-card'>
							<TextInput {...userIndentification}
								id='user-identification-input'
								data-testid='user-identification-input'
								title='User identification'
								className="col s12"
								validate
								mandatory
								required />

							<TextInput {...userPassword}
								id='user-password-input'
								data-testid='user-password-input'
								title='Password'
								className="col s12"
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