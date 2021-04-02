import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: ${props => (props.textPadding ? props.textPadding : "30px 0")};
  font-size: 24px;
  font-weight: bold;
`;

export const GifWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${props => `url(${props.gif}) no-repeat ${props.gifSize}`};
`;
