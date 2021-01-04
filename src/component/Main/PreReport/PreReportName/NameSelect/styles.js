import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: ${props => (props.names.length > 0 ? "flex" : "none")};
  top: 34px;
  width: 140px;
  max-height: 182px;
  background: white;
  border: 1px solid #707070;
  box-sizing: border-box;
  overflow: auto;
  flex-direction: column;
  z-index: 3;
`;
