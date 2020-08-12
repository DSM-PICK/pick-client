import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavFooter from './NavFooter';

const FooterRouting = () => {
	return (
		<Switch>
			<Route
				path={['/main', '/attendance', '/calendar', '/bugreport', '/tonggei']}
				component={NavFooter}
			/>
		</Switch>
	);
};

export default FooterRouting;
