import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: ${(props) => (props.size === 'big' ? '100px' : '50px')};
	height: 4px;
	background: ${(props) => (props.bgcolor ? props.bgcolor : '#000000')};
	border-radius: 2px;
	margin: 12px 0;
`;
