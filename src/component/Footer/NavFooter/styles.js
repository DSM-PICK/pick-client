import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 75px;
  background: #f5f5f5;
  margin-top: auto;
  align-items: center;
  justify-content: center;
`;

export const FooterNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 25%;
  height: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
`;

export const FooterNavImg = styled.img`
  display: flex;
  width: 40px;
  height: 60%;
`;

export const FooterNavText = styled.p`
  color: ${props => (props.here ? "#2764A7" : "#707070")};
  font-size: 20px;
  font-weight: 400;
`;
