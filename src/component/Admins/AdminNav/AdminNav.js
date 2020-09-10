import React from 'react';
import * as S from './styles';
import AdminNavItem from './AdminNavItem/AdminNavItem';

const AdminNav = () => {
	const itemDataSet = [
		{
			size: 'big',
			imgLink: '../../../../../src/asset/Logo/WhiteLogo.png',
			link: '',
		},
		{
			size: 'small',
			text: '동아리',
			link: '',
		},
		{
			size: 'middle',
			text: '동아리 목록',
			link: '',
		},
		{
			size: 'middle',
			text: '동아리 관리',
			link: '',
		},
		{
			size: 'middle',
			text: '동아리원 관리',
			link: '',
		},
		{
			size: 'small',
			text: '기타',
			link: '',
		},
		{
			size: 'middle',
			text: '출석기록 출력',
			link: '',
		},
	];

	return (
		<S.Container>
			{itemDataSet.map((item) => (
				<AdminNavItem
					key={item.text}
					text={item.text}
					size={item.size}
					link={item.link}
					imgLink={item.imgLink}
				/>
			))}
		</S.Container>
	);
};

export default AdminNav;
