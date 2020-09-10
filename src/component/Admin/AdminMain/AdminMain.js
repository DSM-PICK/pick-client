import React from 'react';
import * as S from './styles';
import AdminBody from '../AdminBody/AdminBody';
import AdminNav from '../AdminNav/AdminNav';
import AdminBodyTitle from '../AdminBody/AdminBodyTitle/AdminBodyTitle';
import AdminBodyFunc from '../AdminBody/AdminBodyFunc/AdminBodyFunc';
import AdminMainText from './AdminMainText/AdminMainText';
import AdminMainImgWrap from './AdminMainImgWrap/AdminMainImgWrap';

const AdminMain = () => {
	return (
		<S.Container>
			<AdminNav />
			<AdminBody>
				<AdminBodyTitle imglink="../../../../src/asset/Logo/LogoForAdmin.png" />
				<AdminBodyFunc>
					<AdminMainText />
					<AdminMainImgWrap />
				</AdminBodyFunc>
			</AdminBody>
		</S.Container>
	);
};

export default AdminMain;
