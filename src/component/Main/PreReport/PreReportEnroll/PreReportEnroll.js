import React from "react";
import * as S from "./styles";
import PreReportEnrollItem from "./PreReportEnrollItem/PreReportEnrollItem";
import { useSelector } from "react-redux";

const PreReportEnroll = props => {
  const { onSubmit } = props;

  const nameArr = useSelector(state => state.preReport.names);

  return (
    <S.Container>
      <S.StdListWrap>
        {nameArr.map((name, index) => (
          <PreReportEnrollItem key={index} name={name} />
        ))}
      </S.StdListWrap>
      <S.SubmitBtn onClick={onSubmit}>등록</S.SubmitBtn>
    </S.Container>
  );
};

export default PreReportEnroll;
