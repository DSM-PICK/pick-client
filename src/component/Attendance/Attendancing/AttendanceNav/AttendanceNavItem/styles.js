import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: max-content;
  padding: 0 35px;
  color: ${props => (props.done === "done" ? "#C4C4C4" : "black")};
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
  transform: translateY(-5px);
  justify-content: center;
`;

export const activeStyle = {
  color: "#2764A7"
};
