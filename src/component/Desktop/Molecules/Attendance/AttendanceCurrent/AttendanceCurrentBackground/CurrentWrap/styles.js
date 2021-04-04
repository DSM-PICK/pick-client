import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
`;

export const HeaderTitle = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 400;
`;

export const Body = styled.div`
  display: grid;
  grid-template: repeat(auto-fill, 24px) / repeat(auto-fill, minmax(50%, 1fr));
`;

export const BodyItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.done ? "#FF406E" : "#406CFF")};
  font-size: 16px;
  font-weight: ${props => (props.done ? "500" : "400")};
`;
