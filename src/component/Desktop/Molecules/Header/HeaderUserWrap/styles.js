import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 122px;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: none;

  &:hover {
    cursor: pointer;
  }

  &:hover > div {
    display: flex;
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

export const UserWrapModal = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 60px;
  z-index: 2;
  width: 120px;
  height: 70px;
  border-radius: 0 0 8px 8px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 2px rgb(144 144 144 / 20%);

  &:hover {
    display: flex;
  }
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 100%;
  color: ${props => props.color || "#000000"};
  font-size: 16px;
  text-decoration: none;
  border: none;
  outline: none;
  background: none;

  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background: #f8f8f8;
  }
`;
