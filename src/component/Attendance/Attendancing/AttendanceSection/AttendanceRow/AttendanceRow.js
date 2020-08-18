import React, { useState } from 'react';
import * as S from './styles';
import AttendanceCell from './AttendanceCell/AttendanceCell';

const AttendanceRow = (props) => {
	const { gradeClassNumber, name, sequence } = props.attendance;
	const { onChangeRow } = props;
	const { classData } = props;
	const [sevenState, setSevenState] = useState('1');
	const [eightState, setEightState] = useState('1');
	const [nineState, setNineState] = useState('출석');
	const [tenState, setTenState] = useState('출석');

	let classDatas = classData.attendances.filter(
		(attendance) => attendance.sequence !== sequence,
	);

	classDatas = classDatas.concat({
		gradeClassNumber: gradeClassNumber,
		name: name,
		sequence: sequence,
		state: {
			seven: sevenState,
			eight: eightState,
			nine: nineState,
			ten: tenState,
		},
	});

	classDatas.sort(function (a, b) {
		return a.sequence - b.sequence;
	});

	let data = {
		...classData,
		attendances: [...classDatas],
	};

	// onClick={() => onChangeRow(data)}

	console.log(data);

	return (
		<S.Containter>
			<S.SectionSeq>{sequence}</S.SectionSeq>
			<S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
			<S.SectionName>{name}</S.SectionName>
			<S.SectionClassWrap>
				<S.SectionClass>
					<AttendanceCell></AttendanceCell>
				</S.SectionClass>
				<S.SectionClass>
					<AttendanceCell></AttendanceCell>
				</S.SectionClass>
				<S.SectionClass>
					<AttendanceCell></AttendanceCell>
				</S.SectionClass>
				{/* <S.SectionClass>
					<AttendanceCell></AttendanceCell>
				</S.SectionClass> */}
			</S.SectionClassWrap>
		</S.Containter>
	);
};

export default AttendanceRow;
