import React from 'react';
import { Row, Col, CardPanel, TextInput } from 'react-materialize';

import useFormInput from 'core/hooks/useFormInput';
import { MainRow } from 'core/components/StyledComponents';
import { AppNameH1, LeftMainCol, RightMainCol, SignInButton } from './components/StyledComponents';

function Login() {
	const userIndentification = useFormInput();
	const userPassword = useFormInput();

	return (
		<MainRow id='main-row'
			node='main'>
			<LeftMainCol id='left-main-col' 
				node='section'
				s={12} 
				m={6}
				l={7} >
				<AppNameH1>Sckan</AppNameH1>
			</LeftMainCol>

			<RightMainCol id='right-main-col'
				node='section'
				s={12}
				m={6}
				l={5}>
				<Row id='login-card-row'
					style={{ display: 'flex', justifyContent: 'center' }}>
					<Col id='login-card-col' 
						style={{ margin: 0 }} 
						s={12}
						l={11}
						xl={8}>
						<CardPanel id='login-card'>
							<TextInput {...userIndentification}
								id='user-identification-input'
								label='User identification'
								placeholder='Type your email or your identification'
								s={12}
								validate />

							<TextInput {...userPassword}
								id='user-password-input'
								label='Password'
								placeholder='Type your password'
								s={12}
								password
								validate />
								
							<SignInButton id='login-button'
								large
								waves="light">
									Sign-in
							</SignInButton>
						</CardPanel>
					</Col>
				</Row>
			</RightMainCol>
		</MainRow>
	);
}

export default Login;