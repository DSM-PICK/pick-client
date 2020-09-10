import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import AdminNav from './AdminNav/AdminNav';

const AdminRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route path="/admin/main" component={AdminNav} />
			</Switch>
		</S.Container>
	);
};

export default AdminRouting;
