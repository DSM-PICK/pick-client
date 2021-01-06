import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 122px;
  height: 23px;
  padding: 0;
  border: none;
  outline: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const UserName = styled.div`
  width: max-content;
  height: max-content;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;

export const ImgCSS = {
  width: "16px",
  height: "8px"
};
