import React, { useState, useEffect } from 'react';
import * as S from './styles';
import AttendanceRowTop from './AttendanceRowTop/AttendanceRowTop';
import AttendanceRow from './AttendanceRow/AttendanceRow';

const AttendanceSection = (props) => {
	const { data0 } = props;
	const [classData, setClassData] = useState(data0);

	const onChangeRow = (data) => {
		console.log(data);
		setClassData(data);
	};

	console.log(classData);

	return (
		<S.Container>
			<S.Article>
				<S.Name>{classData.name}</S.Name>
				<S.Location>{`세미나실 2-1`}</S.Location>
				<S.Head>{`부장 : ${classData.head}`}</S.Head>
			</S.Article>
			<AttendanceRowTop />
			<S.Attendance>
				{classData.attendances.map((attendance) => (
					<AttendanceRow
						key={attendance.sequence}
						attendance={attendance}
						classData={classData}
						onChangeRow={onChangeRow}
					/>
				))}
			</S.Attendance>
		</S.Container>
	);
};

export default AttendanceSection;
