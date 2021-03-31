import React from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckArr,
  setCheckAll
} from "../../../../../module/action/attendance";
import AttendanceListContainer from "./AttendanceList/AttendanceListContainer";

const AttendanceRow = props => {
  const { index } = props;
  const { name, gradeClassNumber: stdNum } = props.attData;

  const dispatch = useDispatch();
  const checkArr = useSelector(state => state.attendance.checkArr);

  const onClickCheckbox = () => {
    const newCheckArr = checkArr.map((check, mapIdx) =>
      mapIdx === index ? !check : check
    );

    dispatch(setCheckArr(newCheckArr));

    newCheckArr.every(check => check === true)
      ? dispatch(setCheckAll(true))
      : dispatch(setCheckAll(false));
  };

  return (
    <S.Containter check={checkArr[index]}>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={`${stdNum}-${index}`}
          checked={checkArr[index] || false}
          readOnly
          onClick={onClickCheckbox}
        />
        <S.SectionCheckboxLabel
          htmlFor={`${stdNum}-${index}`}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
      <S.SectionStdNum>{stdNum}</S.SectionStdNum>
      <S.SectionName>{name}</S.SectionName>
      <AttendanceListContainer {...props} />
    </S.Containter>
  );
};

export default AttendanceRow;
