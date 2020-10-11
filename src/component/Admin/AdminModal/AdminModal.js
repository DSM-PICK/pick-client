import React from 'react';
import * as S from './styles';

const AdminModal = () => {
	return (
		<S.Container>
			<S.Modal>
				<S.Header>로그아웃</S.Header>
				<S.Main>정말로 로그아웃 하시겠습니까?</S.Main>
				<S.Footer>
					<S.FooterBtn text={`취소`}>취소</S.FooterBtn>
					<S.FooterBtn>확인</S.FooterBtn>
				</S.Footer>
			</S.Modal>
		</S.Container>
	);
};

export default AdminModal;
