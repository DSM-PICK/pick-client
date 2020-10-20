import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: white;
  align-items: center;
  justify-content: center;
`;

export const ContainerBackground = styled(Container)`
  background: ${props => `url(${props.url})`} 100% 100%;
`;
