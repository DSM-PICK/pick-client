import React from 'react';
import * as S from './styles';

const onSave = () => {
	history.back();
};

const SaveFooter = () => {
	return <S.Container onClick={onSave}>저장하기</S.Container>;
};

export default SaveFooter;
