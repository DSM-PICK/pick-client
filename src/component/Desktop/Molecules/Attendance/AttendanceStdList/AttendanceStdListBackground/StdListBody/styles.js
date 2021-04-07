import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 3px;
  grid-template-rows: ${props =>
    `repeat(${props.length || "auto-fill"}, 24px)`};
  width: 100%;
  height: calc(100% - 24px);
  overflow: scroll;
`;

export const StdListGridCSS = {
  fontWeight: "400"
};
