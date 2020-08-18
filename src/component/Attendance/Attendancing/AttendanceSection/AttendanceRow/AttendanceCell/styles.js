import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	width: 80%;
`;

export const ValueButton = styled.button`
	width: 100%;
	min-height: 36px;
	font-size: 26px;
	background: white;
	border: 1px solid #707070;
	border-radius: 20px;
	box-sizing: border-box;
	outline: none;

	${(props) =>
		props.state
			? css`
					&:focus,
					&:active {
						background: #2764a7;
						color: white;
						border-radius: 20px 20px 0 0;
						border-bottom: none;
						ul {
							transform: translate(0, 34px);
							opacity: 1;
							visibility: visible;
						}
						ul:nth-child(1) {
							border-radius: 0 0 20px 20px;
						}
					}
			  `
			: ''}

	ul {
		position: absolute;
		top: 0px;
		left: 0;
		width: 100%;
		background: #2764a7;
		color: white;
		border: 1px solid #707070;
		border-top: none;
		border-radius: 20px;
		z-index: 1;
		opacity: 0;
		visibility: hidden;
		transition: 0.3s ease;

		box-sizing: border-box;

		li {
			position: relative;
			z-index: 2;
			display: flex;
			width: 100%;
			height: 40px;
			align-items: center;
			justify-content: center;
		}
	}
`;

export const Wrap = styled.ul`
	position: absolute;
`;

export const Item = styled.li`
	display: flex;
`;
