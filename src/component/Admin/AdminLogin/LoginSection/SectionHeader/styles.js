import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	color: ${(props) => props.color && props.color};
	font-size: 30px;
	font-weight: bold;
`;
