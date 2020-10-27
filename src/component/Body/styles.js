import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${props =>
    props.ismain === "main" ? "auto" : "calc(100vh - 135px)"};
  background-color: white;
  padding: 10px 30px 30px 30px;
  border-radius: 40px 40px 0 0;
  box-sizing: border-box;
  overflow: auto;
  flex-direction: column;
  justify-content: flex-start;
`;
