import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import { DAttendanceActionCreater } from "../../../../../../../module/action/d_attendance";
import * as S from "./styles";

const StdListGrid = props => {
  const { index, name, stdNum, reason, css } = props;
  const dispatch = useDispatch();
  const selectArr = useSelector(state => state.dAttendance.selectArr);
  const { setSelectArr, setSelectAll } = DAttendanceActionCreater;
  const onClickCheckBox = useCallback(() => {
    const newSelectArr = selectArr.map((data, mapIndex) =>
      mapIndex === index ? !data : data
    );
    dispatch(setSelectArr(newSelectArr));

    newSelectArr.every(select => select === true)
      ? dispatch(setSelectAll(true))
      : dispatch(setSelectAll(false));
  }, [selectArr, dispatch]);

  return (
    <S.Container select={selectArr[index]}>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={`${stdNum}-${index}`}
          checked={selectArr[index]}
          onClick={onClickCheckBox}
        />
        <S.SectionCheckboxLabel
          htmlFor={`${stdNum}-${index}`}
        ></S.SectionCheckboxLabel>
      </S.SectionCheckboxWrap>
      <S.StdName {...css}>{`${stdNum} ${name}`}</S.StdName>
      <DesktopAttendanceListContainer {...props} />
      <S.StdMemo {...css}>{reason}</S.StdMemo>
    </S.Container>
  );
};

export default React.memo(StdListGrid);
