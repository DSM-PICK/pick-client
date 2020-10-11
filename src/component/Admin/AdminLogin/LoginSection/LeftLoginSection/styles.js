import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	& > div {
		padding-left: 100px;
		align-items: flex-start;
	}

	@media (max-width: 1100px) {
		& > div {
			padding-left: 50px;
		}
	}
`;
