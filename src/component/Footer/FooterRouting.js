import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainFooter from './MainFooter/MainFooter';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import BugreportFooter from './BugReportFooter/BugreportFooter';
import TonggieFooter from './TonggieFooter/TonggieFooter';

const FooterRouting = () => {
	return (
		<Switch>
			<Route path="/main" component={MainFooter} />
			<Route path="/calendar" component={CalendarFooter} />
			<Route path="/bugreport" component={BugreportFooter} />
			<Route path="/tonggei" component={TonggieFooter} />
		</Switch>
	);
};

export default FooterRouting;
