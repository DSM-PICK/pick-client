import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  overflow-y: scroll;
`;

export const Modal = styled.div`
  width: 40%;
  min-width: 440px;
  height: 75%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 20px;
  box-sizing: border-box;
  color: #707070;
  height: 100px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div + div {
      margin-top: 10px;
    }
  }
`;

export const HeaderCenter = styled.div`
  text-align: center;
  div {
    font-weight: bolder;
  }
  & > div:nth-child(1) {
    font-size: 25px;
    color: black;
  }
`;

export const TeacherNameWrap = styled.div`
  position: relative;
`;

export const TeacherNameList = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #606060;
  background-color: white;
  max-height: 100px;
  overflow-y: auto;
`;

export const TeacherNameItem = styled.div`
  text-align: center;
  padding: 10px 0;
  width: 100%;
  & + & {
    border-top: 1px solid #606060;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: left !important;
  align-items: center;
`;

export const HeaderRight = styled.div`
  text-align: right;
  div {
    font-weight: bolder;
  }
  ${props => props.active && "align-items:flex-end;"}
  > div, > input {
    display: inline;
    width: 100px;
  }
`;

export const EmptyBox = styled.div`
  width: 70px;
`;

export const Hr = styled.div`
  border-top: 1px solid #707070;
`;

export const Body = styled.div`
  padding: 20px;
  flex: 1;
  max-height: 500px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #707070;
  display: block;
  width: 100%;
  outline: none;
  padding: 3px 10px;
  box-sizing: border-box;
  text-align: center;

  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};

  & + & {
    margin-top: 10px;
  }
`;

export const ViewWrap = styled.div`
  position: relative;
`;
