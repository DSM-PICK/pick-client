import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 20px;
	font-size: 28px;
	font-weight: bold;
	text-align: center;
	min-width: 180px;
	color: ${(props) => (props.done === 'true' ? '#C4C4C4' : 'black')};
	text-decoration: none;
`;

export const activeStyle = {
	color: '#2764A7',
};
