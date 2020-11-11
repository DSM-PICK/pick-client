import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  display: flex;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  padding: ${props => (props.padding ? props.padding : 0)};
  justify-content: center;
`;

export const Stdnum = styled(Paragraph)`
  width: 36px;
`;

export const Name = styled(Paragraph)`
  width: 48px;
`;

export const State = styled(Paragraph)`
  width: 32px;
`;

export const During = styled(Paragraph)`
  width: 260px;
`;

export const Reason = styled(Paragraph)`
  width: 280px;
`;
