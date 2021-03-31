import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckAll,
  setCheckArr
} from "../../../../../module/action/attendance";
import * as S from "./styles";

const AttendanceRowTop = () => {
  const dispatch = useDispatch();
  const { attendanceData } = useSelector(state => state.attendance);
  const checkAll = useSelector(state => state.attendance.checkAll);
  const checkArr = useSelector(state => state.attendance.checkArr);

  const oncheckAllClick = () => {
    dispatch(setCheckAll(!checkAll));

    !checkAll
      ? dispatch(setCheckArr(checkArr.map(_ => true)))
      : dispatch(setCheckArr(checkArr.map(_ => false)));
  };

  let length = 0;
  if (attendanceData.length) {
    length = Object.values(attendanceData[0].state).filter(data => data).length;
  }

  const periodList = ["10교시", "9교시", "8교시", "7교시"]
    .slice(0, length)
    .reverse();

  return (
    <S.Containter>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={"attendance-checkbox"}
          checked={checkAll || false}
          readOnly
          onClick={oncheckAllClick}
        />
        <S.SectionCheckboxLabel
          htmlFor={"attendance-checkbox"}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
      <S.SectionStdNum>학번</S.SectionStdNum>
      <S.SectionName>이름</S.SectionName>
      <S.SectionClassWrap>
        {periodList.map(period => (
          <S.SectionClass key={period}>{period}</S.SectionClass>
        ))}
      </S.SectionClassWrap>
    </S.Containter>
  );
};

export default AttendanceRowTop;
