import styled from 'styled-components';

import { SECUNDARY_COLOR } from 'core/utils/constants';

const AppNameH1 = styled.h1`
	color: #fff;
	font-weight: bold;
	font-style: italic;
	margin: 0;
`;

const AppNameDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${SECUNDARY_COLOR};
	height: 150px;
`;

export {
	AppNameH1,
	AppNameDiv,
};