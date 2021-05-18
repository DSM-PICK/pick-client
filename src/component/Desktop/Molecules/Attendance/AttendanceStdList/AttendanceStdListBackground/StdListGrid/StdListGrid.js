import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DesktopAttendanceListContainer from "../../../../../../../container/Desktop/Main/Attendance/DesktopAttendanceListContainer";
import { DAttendanceActionCreater } from "../../../../../../../module/action/d_attendance";
import * as S from "./styles";

const StdListGrid = props => {
  const { index, name, stdNum, reason, css, disableStudentStateArray } = props;
  const dispatch = useDispatch();
  const selectArr = useSelector(state => state.dAttendance.selectArr);
  const selectArrWithDisable = useSelector(
    state => state.dAttendance.selectArrWithDisable
  );
  const {
    setSelectArr,
    setSelectAll,
    setSelectArrWithDisable
  } = DAttendanceActionCreater;

  const onClickCheckBox = () => {
    if (!disableStudentStateArray[index]) {
      const newSelectArr = selectArr.map((data, mapIndex) =>
        mapIndex === index ? !data : data
      );
      const newSelectArrWithoutDisable = selectArrWithDisable.map(
        (data, mapIdx) => (mapIdx === index ? !data : data)
      );

      dispatch(setSelectArrWithDisable(newSelectArrWithoutDisable));
      dispatch(setSelectArr(newSelectArr));

      newSelectArrWithoutDisable.every(
        select => select === true || select === "disabled"
      )
        ? dispatch(setSelectAll(true))
        : dispatch(setSelectAll(false));
    }
  };

  return (
    <S.Container select={selectArr[index]}>
      <S.SectionCheckboxWrap>
        <S.SectionCheckbox
          type="checkbox"
          id={`${stdNum}-${index}`}
          checked={selectArr[index] || false}
          readOnly
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
