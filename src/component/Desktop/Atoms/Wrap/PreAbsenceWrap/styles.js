import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px 50px;
  border-top-right-radius: ${props => props.radiusSize};
  border-bottom-left-radius: ${props => props.radiusSize};
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
`;
