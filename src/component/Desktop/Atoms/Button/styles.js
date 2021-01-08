import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize || "16px"};
  font-weight: ${props => props.fontWeight || "400"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "0"};
  padding: ${props => props.padding || "0"};
  background: ${props => props.background || "#ffffff"};

  outline: none;

  &:hover {
    cursor: pointer;
    background: ${props => props.hoverBackground || props.background};
  }

  &:active {
    background: ${props => props.activeBackground || props.background};
  }

  transition: background 0.3s ease-in-out;
`;
