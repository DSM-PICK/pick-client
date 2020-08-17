import React, { useCallback } from 'react';
import * as S from './styles';

const AttendanceRow = (props) => {
	const { gradeClassNumber, name, sequence, state } = props.attendance;

	return (
		<S.Containter>
			<S.SectionSeq>{sequence}</S.SectionSeq>
			<S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
			<S.SectionName>{name}</S.SectionName>
			<S.SectionClassWrap>
				<S.SectionClass>7교시</S.SectionClass>
				<S.SectionClass>8교시</S.SectionClass>
				<S.SectionClass>9교시</S.SectionClass>
				<S.SectionClass>10교시</S.SectionClass>
			</S.SectionClassWrap>
		</S.Containter>
	);
};

export default AttendanceRow;
