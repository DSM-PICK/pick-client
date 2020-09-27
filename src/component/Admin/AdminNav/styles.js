import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 15vw;
  min-width: 180px;
  height: 100%;
  background: #202831;
  align-items: center;
  flex-direction: column;
  z-index: 4;

  @media (max-width: 1150px) {
    width: 172px;
  }
`;
