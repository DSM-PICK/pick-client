import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	padding: 4px 0 0 4px;

	&:nth-child(n) {
		border-right: 1px solid #c4c4c4;
	}
	&:nth-last-child() {
		border: none;
	}
`;

export const Date = styled.div`
	display: flex;
	color: ${(props) => (props.isToday ? 'white' : 'black')};
	color: ${(props) => !props.isActive && '#c4c4c4'};
	font-size: 18px;
	font-weight: bold;

	width: 24px;
	height: 24px;
	border-radius: 50%;
	${(props) =>
		props.isToday &&
		props.isActive &&
		css`
			background: #267dff;
		`}

	align-items: center;
	justify-content: center;
`;
