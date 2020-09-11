import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import AdminMain from './AdminMain/AdminMain';

const AdminRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route path="/admin/main" component={AdminMain} />
			</Switch>
		</S.Container>
	);
};

export default AdminRouting;
