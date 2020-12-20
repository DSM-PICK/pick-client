import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 17px 10px;
  color: ${props => (props.isActive ? "#20223E" : "#C4C4C4")};
  border: 1px solid rgba(112, 112, 112, 0.05);
`;

export const CircleP = styled.div`
  position: absolute;
`;

export const ActiveCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #2764a7;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  width: 20px;
  position: relative;

  text-align: center;
  height: 20px;
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 13px;
    height: 10px;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TeacherName = styled.div`
  padding: 5px 0;
  height: 20px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  ${props =>
    props.isActive &&
    css`
      background-color: #2764a7;
      border-radius: 12px;
      color: white;
    `};
`;
