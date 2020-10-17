import React from "react";
import * as S from "./styles";
import AttendanceCell from "./AttendanceCell/AttendanceCell";
import { useDispatch } from "react-redux";
import { postAttendanceStdDataSaga } from "../../../../../module/action/attendance";

const AttendanceRow = props => {
  const { index } = props;
  const { name, state, gradeClassNumber } = props.attendance;

  const isSevenClassNull = state.seven === null;

  const dispatch = useDispatch();

  const onSevenClick = value => {
    dispatch(
      postAttendanceStdDataSaga({
        number: gradeClassNumber,
        period: 7,
        state: value
      })
    );
    console.log(gradeClassNumber, 7, value);
  };

  const onEightClick = value => {
    dispatch(
      postAttendanceStdDataSaga({
        number: gradeClassNumber,
        period: 8,
        state: value
      })
    );
    console.log(gradeClassNumber, 8, value);
  };

  const onNineClick = value => {
    dispatch(
      postAttendanceStdDataSaga({
        number: gradeClassNumber,
        period: 9,
        state: value
      })
    );
    console.log(gradeClassNumber, 9, value);
  };

  const onTenClick = value => {
    dispatch(
      postAttendanceStdDataSaga({
        number: gradeClassNumber,
        period: 10,
        state: value
      })
    );
    console.log(gradeClassNumber, 10, value);
  };

  return (
    <S.Containter>
      <S.SectionSeq>{index + 1}</S.SectionSeq>
      <S.SectionStdNum>{gradeClassNumber}</S.SectionStdNum>
      <S.SectionName>{name}</S.SectionName>
      <S.SectionClassWrap>
        {!isSevenClassNull && (
          <AttendanceCell index={index} onClassClick={onSevenClick} />
        )}
        <S.SectionClass>
          <AttendanceCell index={index} onClassClick={onEightClick} />
        </S.SectionClass>
        <S.SectionClass>
          <AttendanceCell index={index} onClassClick={onNineClick} />
        </S.SectionClass>
        <S.SectionClass>
          <AttendanceCell index={index} onClassClick={onTenClick} />
        </S.SectionClass>
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRow;
