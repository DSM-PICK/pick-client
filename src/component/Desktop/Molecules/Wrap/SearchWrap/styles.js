import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -10px;
  display: flex;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);

  align-items: center;

  & > img {
    margin: 0 14px;
  }
`;
