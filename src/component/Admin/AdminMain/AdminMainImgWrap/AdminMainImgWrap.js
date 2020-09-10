import React from 'react';
import * as S from './styles';

const AdminMainImgWrap = () => {
	const imglinks = [
		'../../../src/asset/Admin/AdminMain1.png',
		'../../../src/asset/Admin/AdminMain2.png',
		'../../../src/asset/Admin/AdminMain3.png',
		'../../../src/asset/Admin/AdminMain4.png',
	];

	return (
		<S.Container>
			{imglinks.map((imglink) => (
				<S.Img imglink={imglink} />
			))}
		</S.Container>
	);
};

export default AdminMainImgWrap;
