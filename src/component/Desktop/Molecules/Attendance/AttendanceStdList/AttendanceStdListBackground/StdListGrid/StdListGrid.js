import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import * as S from "./styles";

const StdListGrid = props => {
  const { index, name, stdNum, reason, css } = props;
  const selectArr = useSelector(
    state => state.dAttendance.selectArr,
    shallowEqual
  );

  return (
    <S.Container>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={`${stdNum}-${index}`}
          checked={selectArr[index]}
          onClick={() => console.log(selectArr[index])}
        />
        <S.SectionCheckboxLabel
          htmlFor={`${stdNum}-${index}`}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DesktopAttendanceListContainer index={index} {...props} />
      <S.StdMemo {...css}>{reason}</S.StdMemo>
    </S.Container>
  );
};

export default React.memo(StdListGrid);
