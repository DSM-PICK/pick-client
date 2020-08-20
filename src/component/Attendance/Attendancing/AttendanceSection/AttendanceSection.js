import React, { useState } from 'react';
import * as S from './styles';
import AttendanceRowTop from './AttendanceRowTop/AttendanceRowTop';
import AttendanceRow from './AttendanceRow/AttendanceRow';

const isClub = () => {
	return location.pathname[15] === 's' ? false : true;
};

const isSelfStudy = () => {
	console.log(location.pathname[17]);
	return location.pathname[17] === 's' ? true : false;
};

const AttendanceSection = (props) => {
	const { data0 } = props;
	const [classData, setClassData] = useState(data0);

	const onChangeRow = (data) => {
		setClassData(data);
	};

	return (
		<S.Container>
			{isClub() && !isSelfStudy() && (
				<S.Article>
					<S.Name>{classData.name}</S.Name>
					<S.Location>{`세미나실 2-1`}</S.Location>
					<S.Head>{`부장 : ${classData.head}`}</S.Head>
				</S.Article>
			)}
			{isClub() && isSelfStudy() && (
				<S.Article>
					<S.Location location="자습실">{`자습실`}</S.Location>
				</S.Article>
			)}
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
