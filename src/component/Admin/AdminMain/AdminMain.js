import React from 'react';
import * as S from './styles';
import AdminBody from '../AdminBody/AdminBody';
import AdminNav from '../AdminNav/AdminNav';

const AdminMain = () => {
	return (
		<S.Container>
			<AdminNav />
			<AdminBody />
		</S.Container>
	);
};

export default AdminMain;
