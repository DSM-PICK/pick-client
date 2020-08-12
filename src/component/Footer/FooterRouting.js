import React from 'react';
import { Switch, Route } from 'react-router-dom';

const FooterRouting = () => {
	return (
		<Switch>
			<Route path="/main" component={} />
			<Route path="/calendar" component={} />
			<Route path="/bugreport" component={} />
			<Route path="/tonggei" component={} />
		</Switch>
	);
};

export default FooterRouting;
