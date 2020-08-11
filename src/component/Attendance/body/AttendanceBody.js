import React, { useState } from 'react';
import * as S from './styles';
import AttendanceAnchor from './anchor/AttendanceAnchor';
import Body from '../../Body/Body';

const AttendanceBody = (props) => {
	const { anchorItems } = props;

	return (
		<Body>
			{anchorItems.map((anchorItems) => (
				<AttendanceAnchor
					key={anchorItems.link}
					text={anchorItems.text}
					imgLink={anchorItems.imgLink}
					link={anchorItems.link}
				/>
			))}
		</Body>
	);
};

export default AttendanceBody;
