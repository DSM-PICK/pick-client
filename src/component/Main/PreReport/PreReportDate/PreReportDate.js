import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";

const PreReportDate = props => {
  const { refInputArr } = props;
  const { onClassChange, onPreReportClick } = props;

  const preAbsenceData = useSelector(state => state.preReport);
  const { preDate, nextDate } = preAbsenceData;
  const dateArr = [preDate, nextDate];

  return (
    <S.Container>
      {dateArr.map((date, index) => (
        <S.Date key={index}>
          <S.Month month={date.month} onClick={() => onPreReportClick(!index)}>
            월
          </S.Month>
          <S.Day day={date.day} onClick={() => onPreReportClick(!index)}>
            일
          </S.Day>
          <S.ClassWrap>
            <S.Class
              type="number"
              placeholder="__"
              ref={refInputArr[index]}
              value={date.period}
              onChange={e =>
                onClassChange(!index, dateArr[index], preDate, nextDate, e)
              }
            />
            <S.ClassText>교시</S.ClassText>
            {!index && <S.Additional>~</S.Additional>}
          </S.ClassWrap>
        </S.Date>
      ))}
    </S.Container>
  );
};

export default PreReportDate;
