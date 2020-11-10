import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`;

export const NumWithUnderline = styled.p`
  position: relative;
  color: #6c63ff;
  font-size: 18px;
  font-weight: bold;

  &::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 7px;
    margin-left: 50%;
    transform: translateX(-50%);

    width: 16px;
    height: 3px;
    border-radius: 1px;
    background: #6c63ff;
  }
`;
