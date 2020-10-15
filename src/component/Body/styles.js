import styled from "styled-components";

export const Container = styled.div`
  border-radius: 60px 60px 0 0;
  width: 100%;
  height: ${props =>
    props.ismain === "main" ? "auto" : "calc(100vh - 210px)"};
  background-color: white;
  padding: 20px 30px 0px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
