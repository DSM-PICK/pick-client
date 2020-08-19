import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Modal = (props) => {
	const { onModalClick } = props;

	const onNoModalClick = (event) => {
		event.stopPropagation();
	};

	return (
		<S.Container onClick={onModalClick}>
			<S.Modal onClick={(event) => onNoModalClick(event)}>
				<S.ModalText>로그아웃하시겠습니까?</S.ModalText>
				<S.ModalBtnWrap>
					<S.ModalCancle onClick={onModalClick}>취소</S.ModalCancle>
					<S.ModalOkay onClick={onModalClick} as={Link} to="/main">
						확인
					</S.ModalOkay>
				</S.ModalBtnWrap>
			</S.Modal>
		</S.Container>
	);
};

export default Modal;
