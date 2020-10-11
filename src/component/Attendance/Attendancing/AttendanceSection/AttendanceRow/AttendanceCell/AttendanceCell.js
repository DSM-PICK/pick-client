import React, { useState } from 'react';
import * as S from './styles';
import AttendanceItem from './AttendanceItem/AttendanceItem';

const AttendanceCell = (props) => {
	const { onClassClick } = props;

	const [state, setState] = useState(false);
	const [text, setText] = useState('출석');
	const states = [
		{
			value: '출석',
		},
		{
			value: '외출',
		},
		{
			value: '현체',
		},
		{
			value: '병결',
		},
		{
			value: '공결',
		},
		{
			value: '무단',
		},
	];

	const onClickItem = (value) => {
		setText(value);
		onClassClick(value);
	};

	return (
		<S.Container
			onClick={() => setState(!state)}
			sequence={props.sequence}
			state={state}
		>
			<S.ValueButton sequence={props.sequence} state={state} text={text}>
				{text}
				<S.Wrap sequence={props.sequence}>
					{states.map((state) => (
						<AttendanceItem
							sequence={props.sequence}
							key={state.value}
							state={state}
							onClickItem={onClickItem}
						/>
					))}
				</S.Wrap>
			</S.ValueButton>
		</S.Container>
	);
};

export default AttendanceCell;
