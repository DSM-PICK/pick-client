import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 500px;
  height: 515px;
  border: 1px solid #707070;
  background: white;
  flex-direction: column;
  top: 0;
  left: 0;
  margin: ${props => (props.margin ? props.margin : "5% 0 0 50%")};
  z-index: 3;
  transform: translateX(-50%);
`;

export const Month = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  justify-content: space-around;
`;

export const MonthText = styled.div`
  display: flex;
  width: 60px;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const MonthArrow = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
`;
