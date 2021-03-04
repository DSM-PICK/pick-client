import React from "react";
import * as S from "./style";

const StatsRecordBackground = props => {
  const { recordData } = props;

  return (
    <S.Container>
      {recordData.map(data => (
        <S.GradeWrapper key={data.title}>
          <S.GradeTitle>{data.title}</S.GradeTitle>
          <S.RecordLine isGray={true}>
            <S.RecordText>{`이동 : 번`}</S.RecordText>
            <S.RecordText>{`외출 : 번`}</S.RecordText>
          </S.RecordLine>
          <S.RecordLine>
            <S.RecordText>{`현체 : 번`}</S.RecordText>
            <S.RecordText>{`귀가 : 번`}</S.RecordText>
          </S.RecordLine>
          <S.RecordLine isGray={true}>
            <S.RecordText isHighlight={true}>{`무단 : 번`}</S.RecordText>
          </S.RecordLine>
        </S.GradeWrapper>
      ))}
    </S.Container>
  );
};

export default StatsRecordBackground;
