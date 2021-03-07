import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 1480px) {
    display: none;
  }
`;

export const ClassInfoContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  padding: 14px;
`;

export const Header = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #000000;
  font-size: 24px;
  font-weight: 600;
`;

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;

export const BackgroundCSS = {
  width: "100%",
  height: "calc(100% - 22px)",
  borderRadius: "12px",
  background: "#ffffff",
  boxShadow: "0px 1px 1px 0px rgba(144, 144, 144, 0.2)"
};