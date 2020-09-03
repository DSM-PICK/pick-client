import React from 'react';
import * as S from './styles';

const PreReportModal = (props) => {
	const { onOffModal } = props;
	return <S.Container onClick={onOffModal}></S.Container>;
};

export default PreReportModal;
