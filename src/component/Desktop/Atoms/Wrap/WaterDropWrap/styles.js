import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  place-content: ${props => props.placeContent};

  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => (props.padding ? props.padding : "10px 50px")};
  border-top-right-radius: ${props => props.radiusSize};
  border-bottom-left-radius: ${props => props.radiusSize};
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);

  ${props =>
    props.setGird &&
    css`
      grid-template-rows: ${props.gridRow};
      grid-template-columns: ${props.gridCol};
    `}
`;
