import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	color: ${(props) => (props.color ? props.color : '#000000')};
	font-size: 16px;
	font-weight: bold;
	margin: 25px 0 100px 0;
`;
