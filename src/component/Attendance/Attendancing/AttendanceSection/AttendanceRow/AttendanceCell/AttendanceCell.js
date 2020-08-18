import React, { useState } from 'react';
import * as S from './styles';
import AttendanceItem from './AttendanceItem/AttendanceItem';

const AttendanceCell = () => {
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
		console.log(value);
	};

	return (
		<S.Container onClick={() => setState(!state)} state={state}>
			<S.ValueButton state={state}>
				{text}
				<S.Wrap>
					{states.map((state) => (
						<AttendanceItem
							key={state.value}
							state={state}
							onClickItem={onClickItem}
						/>
					))}
					{/* <S.Item onClick={() => onClick(value)} value={1}>
						외출
					</S.Item>
					<S.Item onClick={() => onClick(value)} value={2}>
						현체
					</S.Item>
					<S.Item onClick={() => onClick(value)} value={3}>
						병결
					</S.Item>
					<S.Item onClick={() => onClick(value)} value={4}>
						공결
					</S.Item>
					<S.Item onClick={() => onClick(value)} value={5}>
						무단
					</S.Item> */}
				</S.Wrap>
			</S.ValueButton>
		</S.Container>
	);
};

export default AttendanceCell;
