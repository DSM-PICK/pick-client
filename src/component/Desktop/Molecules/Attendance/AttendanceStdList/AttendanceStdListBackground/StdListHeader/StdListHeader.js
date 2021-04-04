import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DAttendanceActionCreater } from "../../../../../../../module/action/d_attendance";
import * as S from "./styles";

const StdListHeader = () => {
  const dispatch = useDispatch();
  const attendanceLists = useSelector(
    state => state.dAttendance.attendanceData
  );
  const selectAll = useSelector(state => state.dAttendance.selectAll);
  const selectArr = useSelector(state => state.dAttendance.selectArr);
  const selectArrWithDisable = useSelector(
    state => state.dAttendance.selectArrWithDisable
  );

  const {
    setSelectArr,
    setSelectAll,
    setSelectArrWithDisable
  } = DAttendanceActionCreater;

  const onAllCheckBoxClick = () => {
    dispatch(setSelectAll(!selectAll));

    dispatch(
      setSelectArrWithDisable(
        selectArrWithDisable.map(check =>
          check !== "disabled" ? !check : check
        )
      )
    );

    !selectAll
      ? dispatch(
          setSelectArr(
            selectArrWithDisable.map(check =>
              check !== "disabled" ? true : false
            )
          )
        )
      : dispatch(setSelectArr(selectArr.map(_ => false)));
  };

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
            checked={selectAll || false}
            readOnly
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
