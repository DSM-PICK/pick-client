import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckAll,
  setCheckArr,
  setCheckArrWithDisable
} from "../../../../../module/action/attendance";
import * as S from "./styles";

const AttendanceRowTop = () => {
  const dispatch = useDispatch();
  const { attendanceData } = useSelector(state => state.attendance);
  const checkAll = useSelector(state => state.attendance.checkAll);
  const checkArrWithDisable = useSelector(
    state => state.attendance.checkArrWithDisable
  );

  const oncheckAllClick = () => {
    dispatch(setCheckAll(!checkAll));

    dispatch(
      setCheckArrWithDisable(
        checkArrWithDisable.map(check =>
          check !== "disabled" ? !check : check
        )
      )
    );

    !checkAll
      ? dispatch(
          setCheckArr(
            checkArrWithDisable.map(check =>
              check !== "disabled" ? true : false
            )
          )
        )
      : dispatch(setCheckArr(checkArrWithDisable.map(_ => false)));
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
