import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 17px 10px;
  color: ${(props) => (props.isActive ? "#20223E" : "#C4C4C4")};
  border: 1px solid rgba(112, 112, 112, 0.05);
`;

export const Header = styled.div`
  width: 20px;
  text-align: center;
  height: 20px;
  font-weight: bold;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TeacherName = styled.div`
  padding: 5px 0;
`;
