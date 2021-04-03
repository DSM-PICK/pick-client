import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  position: absolute;
  top: calc(50% + 130px);
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: ${props => props.textPadding || "30px 0"};
  font-size: 24px;
  font-weight: bold;
`;

export const GifWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: ${props => props.text || "30px 0"};
  background: ${props => `url(${props.gif}) no-repeat ${props.gifSize}`};
`;
