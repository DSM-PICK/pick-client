import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DAttendanceActionCreater } from "../../../../../../../module/action/d_attendance";
import * as S from "./styles";

const StdListHeader = () => {
  const dispatch = useDispatch();
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData
  );
  const selectAll = useSelector(state => state.dAttendance.selectAll);
  const selectArr = useSelector(
    state => state.dAttendance.selectArr,
    shallowEqual
  );

  const { setSelectArr, setSelectAll } = DAttendanceActionCreater;

  const onAllCheckBoxClick = useCallback(() => {
    dispatch(setSelectAll(!selectAll));

    !selectAll
      ? dispatch(setSelectArr(selectArr.map(_ => true)))
      : dispatch(setSelectArr(selectArr.map(_ => false)));
  }, [dispatch, selectArr, selectAll]);

  let length = 0;
  if (attendanceLists.length) {
    length = Object.values(attendanceLists[0].state).filter(data => data)
      .length;
  }

  const name = "학생";
  const attendanceList = ["10교시", "9교시", "8교시", "7교시"]
    .slice(0, length)
    .reverse();
  const memo = "비고";

  return (
    <S.Container>
      <S.ListHeader>
        <S.SectionCheckboxWrap>
          <S.SectionCheckbox
            type="checkbox"
            id={`StdListHeaderCheckBox`}
            checked={selectAll}
            onClick={onAllCheckBoxClick}
          />
          <S.SectionCheckboxLabel
            htmlFor={`StdListHeaderCheckBox`}
          ></S.SectionCheckboxLabel>
        </S.SectionCheckboxWrap>
        <S.HeaderItem>{name}</S.HeaderItem>
        <S.HeaderList length={length}>
          {attendanceList.map(text => (
            <S.HeaderItem key={text}>{text}</S.HeaderItem>
          ))}
        </S.HeaderList>
        <S.HeaderItem>{memo}</S.HeaderItem>
      </S.ListHeader>
    </S.Container>
  );
};

export default React.memo(StdListHeader);
