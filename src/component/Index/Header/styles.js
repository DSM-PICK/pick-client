import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding: 30px 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 100px;
  }
`;

export const LoginText = styled.div`
  color: white;
  border: 1px solid white;
  height: 110px;
  width: 125px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const BoldP = styled.p`
  font-size: 45px;
`;

export const P = styled.p`
  font-size: 35px;
`;

export const Body = styled.div`
  margin-top: 70px;
  color: white;

  p {
    text-align: center;
  }
`;
