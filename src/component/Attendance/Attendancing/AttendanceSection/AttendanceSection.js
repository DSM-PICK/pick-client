import React from 'react';
import * as S from './styles';

const AttendanceSection = () => {
	return (
		<S.Container>
			<S.Article>
				<S.Name>{`GRAM`}</S.Name>
				<S.Location>{`세미나실 2-1`}</S.Location>
				<S.Head>{`부장 : ${`김민석`}`}</S.Head>
			</S.Article>
			<S.Attendance>우앙</S.Attendance>
		</S.Container>
	);
};

export default AttendanceSection;
