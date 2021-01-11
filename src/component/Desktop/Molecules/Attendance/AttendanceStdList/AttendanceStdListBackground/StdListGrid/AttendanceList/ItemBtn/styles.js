import styled, { css } from "styled-components";

export const Container = styled.button`
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
  ${props => {
    switch (props.text) {
      case "이동":
        return css`
          border: 1px solid #406cff;
          color: #406cff;
        `;
      case "귀가":
        return css`
          color: #ffffff;
          border: none;
          background: #406cff;
        `;
      case "무단":
        return css`
          color: #ffffff;
          border: none;
          background: #ff406e;
        `;
      case "취업":
        return css`
          color: #909090;
          border: 1px solid #c4c4c4;
        `;
      default:
        return css`
          border: 1px solid #c4c4c4;
          background: #ffffff;
        `;
    }
  }};
  border-radius: 8px;
  outline: none;

  &:hover {
    ${props =>
      props.text !== "취업" &&
      css`
        cursor: pointer;
      `}
  }
`;
