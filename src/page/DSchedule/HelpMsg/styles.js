import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 15%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  background-color: #ff406e;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 270px;
  padding: 6px 0;
  color: white;

  > svg {
    margin: 0 10px;
  }
`;
