import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  flex: 1;
  box-sizing: border-box;
  overflow-y: hidden;
  background-color: #fafafa;
  position: relative;
`;

export const UploadText = styled.div`
  margin-top: 20px;
  margin-bottom: 13px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadWrap = styled.div`
  width: 679px;
  height: 420px;
  flex-direction: column;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  z-index: 2;

  > img {
    width: 200px;
    height: 150px;
  }
`;

export const UploadBtn = styled.button`
  background-color: #267dff;
  width: 230px;
  border: none;
  padding: 15px 0;
  border-radius: 10px;
  color: white;
  font-size: 30px;
`;

export const Title = styled.div`
  position: relative;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  background: url(${props => props.src}) center 70px no-repeat;
`;
export const SearchButtonWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  border-bottom: 2px solid #707070;
  transform: translateY(-50%);
  right: 150px;
  padding-bottom: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 150px;
  margin-left: 10px;
`;

export const Header = styled.div`
  font-size: 40px;
  padding-top: 70px;
  font-weight: bold;
  text-align: center;
`;

export const Body = styled.div`
  padding-top: 50px;
`;

export const ManagementButtonWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
`;
