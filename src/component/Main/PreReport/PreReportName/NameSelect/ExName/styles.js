import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  padding: 5px 5px;
  ${css`
    ${props => props.isSelected && "background: #267DFF"}
  `};
  color: ${props => (props.isSelected ? "white" : "#707070")};
  font-size: 22px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 3;
`;
