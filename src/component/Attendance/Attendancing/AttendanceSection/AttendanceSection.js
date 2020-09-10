import React, { useState } from 'react';
import * as S from './styles';
import AttendanceRowTop from './AttendanceRowTop/AttendanceRowTop';
import AttendanceRow from './AttendanceRow/AttendanceRow';
import * as Data from '../Constant';

const isClub = () => {
	return location.pathname[15] === 's' ? false : true;
};

const isSelfStudy = () => {
	return location.pathname[17] === 's' ? true : false;
};

const getClassLocation = (locations) => {
	return locations[location.pathname[location.pathname.length - 1]];
};

const getClassData = () => {
	console.log(location.pathname);
	console.log(Number(location.pathname[location.pathname.length - 1]));
	return Number(location.pathname[location.pathname.length - 1]) % 2 === 0
		? Data.CLUB_FLOOR4_0
		: console.log('1');
};

const AttendanceSection = (props) => {
	const { locations } = props;
	const [classData, setClassData] = useState(getClassData());
	console.log(classData);

	const classLocation = getClassLocation(locations);

	const onChangeRow = (data) => {
		setClassData(data);
	};

	return (
		<S.Container>
			{isClub() && !isSelfStudy() && (
				<S.Article>
					<S.Name>{classData.name}</S.Name>
					<S.Location>{classLocation.location}</S.Location>
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
