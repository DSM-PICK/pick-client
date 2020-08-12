import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavFooter from './NavFooter';

const FooterRouting = () => {
	return (
		<Switch>
			<Route path={['/main', '/attendance']} component={NavFooter} />
			<Route path="/calendar" component={NavFooter} />
			<Route path="/bugreport" component={NavFooter} />
			<Route path="/tonggei" component={NavFooter} />
		</Switch>
	);
};

export default FooterRouting;
