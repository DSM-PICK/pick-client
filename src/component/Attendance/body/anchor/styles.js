import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${props => (props.ismain === "main" ? "130px" : "150px")};
  margin: 10px 0;
  margin-top: ${props => (props.text === "4층" ? "30px" : "10px")};
  background: ${props => (props.url ? `url(${props.url})` : "#fafafa")}
    no-repeat center/100%;
  font-size: 30px;
  color: ${props => (props.url ? "white" : "black")};
  text-decoration: none;
  border-radius: 40px;
  box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  /* 
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    filter: blur(10px);
  } */
`;
