import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-right: 5px;
  align-items: center;
  margin: 25px 0;
`;

export const ShowBtn = styled.button`
  display: flex;
  width: 25px;
  height: 18px;
  border: none;
  background: ${props =>
      props.inputType === "password"
        ? `url("src/asset/Admin/Login/show_pw.svg") `
        : `url("src/asset/Admin/Login/show_pw.svg")`}
    no-repeat center/100% 100%;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`;
