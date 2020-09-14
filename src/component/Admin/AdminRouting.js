import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import AdminMain from './AdminMain/AdminMain';
import AdminClub from './AdminClub/AdminClub';
import AdminPrint from './AdminPrint/AdminPrint';
import AdminLogin from './AdminLogin/AdminLogin';

const AdminRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route exact path="/admin" component={AdminMain} />
				<Route path="/admin/club" component={AdminClub} />
				<Route path="/admin/print" component={AdminPrint} />
			</Switch>
		</S.Container>
	);
};

export default AdminRouting;
