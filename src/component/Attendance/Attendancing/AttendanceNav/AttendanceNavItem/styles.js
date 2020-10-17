import styled from "styled-components";

export const Container = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  width: auto;
  padding: 0 30px;
  color: ${props => (props.done === "done" ? "#C4C4C4" : "black")};
  text-decoration: none;
  transform: translateY(-5px);
`;

export const activeStyle = {
  color: "#2764A7"
};
