import React from 'react';
import * as S from './styles';

const AdminMainImgWrap = () => {
	const imglinks = [
		'/src/asset/Admin/AdminMain1.svg',
		'/src/asset/Admin/AdminMain2.svg',
		'/src/asset/Admin/AdminMain3.svg',
		'/src/asset/Admin/AdminMain4.svg',
	];

	return (
		<S.Container>
			{imglinks.map((imglink) => (
				<S.Img key={imglink} imglink={imglink} />
			))}
		</S.Container>
	);
};

export default AdminMainImgWrap;
