import React, { useState } from 'react';
import * as S from './styles';

const AttendanceCell = () => {
	const [state, setState] = useState(false);
	console.log(state);
	return (
		<S.Container onClick={() => setState(!state)} state={state}>
			<S.Wrap>
				<S.Item>1</S.Item>
				<S.Item>2</S.Item>
				<S.Item>3</S.Item>
				<S.Item>4</S.Item>
				<S.Item>5</S.Item>
				<S.Item>6</S.Item>
			</S.Wrap>
		</S.Container>
	);
};

export default AttendanceCell;
