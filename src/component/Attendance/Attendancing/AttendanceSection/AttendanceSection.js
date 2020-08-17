import React from 'react';
import * as S from './styles';
import AttendanceRowTop from './AttendanceRowTop/AttendanceRowTop';

const AttendanceSection = (props) => {
	const { data0 } = props;

	return (
		<S.Container>
			<S.Article>
				<S.Name>{data0.name}</S.Name>
				<S.Location>{`세미나실 2-1`}</S.Location>
				<S.Head>{`부장 : ${data0.head}`}</S.Head>
			</S.Article>
			<AttendanceRowTop />
			<S.Attendance></S.Attendance>
		</S.Container>
	);
};

export default AttendanceSection;
