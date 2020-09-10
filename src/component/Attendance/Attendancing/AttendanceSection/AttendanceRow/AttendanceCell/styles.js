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
	background: ${(props) => (props.text == '출석' ? 'white' : '#2764A7')};
	color: ${(props) => (props.text == '출석' ? 'black' : 'white')};
	border: 1px solid #707070;
	border-radius: 20px;
	box-sizing: border-box;
	outline: none;

	${(props) =>
		props.state && props.sequence > 13
			? css`
					&:focus,
					&:active {
						background: white !important;
						color: black;
						border-radius: 0 0 30px 30px;
						border-top: none;
						ul {
							transform: translate(0, -36px);
							opacity: 1;
							visibility: visible;
							border-bottom: none;
						}
						ul:nth-child(1) {
							border-radius: 30px 30px 0 0;
						}
					}
			  `
			: props.state
			? css`
					&:focus,
					&:active {
						background: white !important;
						color: black;
						border-radius: 30px 30px 0 0;
						border-bottom: none;
						ul {
							transform: translate(0, 34px);
							opacity: 1;
							visibility: visible;
							border-top: none;
						}
						ul:nth-child(1) {
							border-radius: 0 0 30px 30px;
						}
					}
			  `
			: ''}

	ul {
		position: absolute;
		${(props) =>
			props.sequence > 13
				? css`
						top: -284px;
						border-bottom: none;
				  `
				: css`
						top: 0px;
						border-top: none;
				  `}
		left: 0;
		width: 100%;
		background: white;
		color: black;
		border: 1px solid #707070;
		border-radius: 30px;
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
			padding: 7px 0;
			color: black;
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
