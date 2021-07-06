import { Col, Button } from 'react-materialize';
import styled from 'styled-components';

import { MAIN_COLOR, SECUNDARY_COLOR } from 'core/utils/constants';

const AppNameH1 = styled.h1`
	font-size: 120px; 
	font-weight: bold;
	font-style: italic;
	margin: 0;
`;

const LeftMainCol = styled(Col)`
display: flex;
justify-content: center;
padding-top: 100px !important;	
height: 100%;

	@media (max-width: 600px) {
		height: 50%;
		padding-top: 5px !importante;
	};
`;

const RightMainCol = styled(Col)`
	height: 100%;
	background-color: ${SECUNDARY_COLOR};
	padding: 10px !important;
	padding-top: 100px !important;

	@media (max-width: 600px) {
		height: 50%;
		padding: 5px !important;
	};
`;

const SignInButton = styled(Button)`
	width: 100%;
	background-color: ${MAIN_COLOR};
	font-weight: bold;
`;

export {
	AppNameH1,
	LeftMainCol,
	RightMainCol,
	SignInButton,
};