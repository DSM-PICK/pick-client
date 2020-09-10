import styled from "styled-components";

export const Container = styled.div`
<<<<<<< HEAD
  display: flex;
  width: 100%;
  height: 100px;
  background: #f5f5f5;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
=======
	display: flex;
	width: 100%;
	height: 100px;
	background: #f5f5f5;
	position: fixed;
	z-index: 3;
	bottom: 0;

	align-items: center;
	justify-content: center;
>>>>>>> attendance0
`;

export const FooterNavItem = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  align-items: center;
  justify-content: center;

<<<<<<< HEAD
  background: ${(props) =>
      props.imgonlink
        ? `url(${props.imgonlink})`
        : props.imglink
        ? `url(${props.imglink})`
        : "none"}
    no-repeat center/30%;
=======
	background: ${(props) =>
			props.imgonlink
				? `url(${props.imgonlink})`
				: props.imglink
				? `url(${props.imglink})`
				: 'none'}
		no-repeat center/17%;
>>>>>>> attendance0
`;
