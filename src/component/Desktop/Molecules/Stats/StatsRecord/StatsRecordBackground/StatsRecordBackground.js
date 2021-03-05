import React from "react";
import * as S from "./style";

const StatsRecordBackground = props => {
  const { recordDataArr } = props;

  return (
    <S.Container>
      {recordDataArr.map(data => (
        <S.GradeWrapper key={data.title}>
          <S.GradeTitle>{data.title}</S.GradeTitle>
          <S.RecordLine isGray={true}>
            <S.RecordText>{`이동 : ${data.move}번`}</S.RecordText>
            <S.RecordText>{`외출 : ${data.outing}번`}</S.RecordText>
          </S.RecordLine>
          <S.RecordLine>
            <S.RecordText>{`현체 : ${data.fieldExperience}번`}</S.RecordText>
            <S.RecordText>{`귀가 : ${data.homeComing}번`}</S.RecordText>
          </S.RecordLine>
          <S.RecordLine isGray={true}>
            <S.RecordText
              isHighlight={true}
            >{`무단 : ${data.truancy}번`}</S.RecordText>
          </S.RecordLine>
        </S.GradeWrapper>
      ))}
    </S.Container>
  );
};

export default StatsRecordBackground;
