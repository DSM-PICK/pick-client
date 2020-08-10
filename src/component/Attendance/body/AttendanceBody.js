import React, { useState } from 'react';
import * as S from './styles';
import AttendanceAnchor from './anchor/AttendanceAnchor';

const AttendanceBody = (props) => {
	const { anchorItems } = props;

	return (
		<S.Container>
			{anchorItems.map((anchorItems) => (
				<AttendanceAnchor
					key={anchorItems.imgLink}
					text={anchorItems.text}
					imgLink={anchorItems.imgLink}
					link={anchorItems.link}
				/>
			))}
		</S.Container>
	);
};

export default AttendanceBody;
