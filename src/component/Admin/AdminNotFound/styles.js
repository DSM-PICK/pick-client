import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.div`
  width: 810px;
  height: 160px;
  background: url("/src/asset/Admin/NotFoundText.svg") 60%/60% 60% no-repeat;
`;

export const NotFoundImg = styled.div`
  width: 1055px;
  height: 600px;
  background: url("/src/asset/Admin/NotFound404.svg") 60%/60% 60% no-repeat;
`;
