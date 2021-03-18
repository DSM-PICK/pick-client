import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
`;

export const ItemText = styled.p`
  color: ${props => (props.isHere ? "#2764A7" : "#707070")};
  font-size: 20px;
  font-weight: 400;
`;

export const ItemImg = styled.img`
  display: flex;
  width: 40px;
  height: 60%;
`;
