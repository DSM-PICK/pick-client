import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import PreReportEnrollItemContainer from "./PreReportEnrollItem/PreReportEnrollItemContainer";

const PreReportEnroll = props => {
  const { onSubmit } = props;

  const nameArr = useSelector(state => state.preReport.names);

  return (
    <S.Container>
      <S.StdListWrap>
        {nameArr.map(name => (
          <PreReportEnrollItemContainer key={name} name={name} />
        ))}
      </S.StdListWrap>
      <S.SubmitBtn onClick={onSubmit}>등록</S.SubmitBtn>
    </S.Container>
  );
};

export default PreReportEnroll;
