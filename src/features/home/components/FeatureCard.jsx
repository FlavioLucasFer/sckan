import './FeatureCard.css';
import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'core/components/Icon';
import Card from 'core/components/Card';

FeatureCard.propTypes = {
	featureIcon: PropTypes.string.isRequired,
	children: PropTypes.element,
};

function FeatureCard(props) {
	const {
		featureIcon,
		children,
		...rest
	} = props;

	return (
		<div id="container">
			<Card {...rest}
				className="s12"
				cardTitleClassName="feature-card-title"
				style={{ padding: 0 }} >
				{children}
				
				<Icon className="feature-icon">
					{featureIcon}
				</Icon>
			</Card>
		</div>
	);
}

export default FeatureCard;
