import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 10px;

  & > div {
    border-right: 1px solid white;
    flex: 1;
    text-align: center;
  }

  & > div:last-child {
    border: none;
  }
`;
