import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  padding: 30px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${props => `url(${props.gif}) no-repeat 50% 70% / 80%`};
`;
