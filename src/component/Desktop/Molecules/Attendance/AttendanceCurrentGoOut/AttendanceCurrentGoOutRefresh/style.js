import styled from "styled-components";

export const Container = styled.div``;

export const RefreshButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  background: ${props => `#ffffff url('${props.img}') no-repeat center`};
  box-shadow: 0px 1px 1px rgba(144, 144, 144, 0.2);

  :hover {
    cursor: pointer;
  }
`;
