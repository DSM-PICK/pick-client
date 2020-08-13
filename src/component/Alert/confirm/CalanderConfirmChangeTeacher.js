import React, { useCallback } from "react";
import * as S from "../styles";
import { Hr } from "../teacherList/styles";
import { useDispatch } from "react-redux";
import {
  resolveChangeTeacherSaga,
  rejectChangeTeacherSaga,
} from "../../../module/action/calander";
import { arrowIcon } from "../../../asset/index";
import BottomAlert from "../BottomAlert/BottomAlert";

const CalanderConfirmChangeTeacher = ({ firstDay, secondDay }) => {
  const dispatch = useDispatch();

  const resolveChange = useCallback(() => {
    dispatch(resolveChangeTeacherSaga());
  }, [dispatch]);

  const rejectChange = useCallback(() => {
    dispatch(rejectChangeTeacherSaga());
  }, [dispatch]);

  const {
    month: firstDayMonth,
    date: firstDayDate,
    floor: firstDayFloor,
    name: firstDayTeacherName,
  } = firstDay;
  const {
    month: secondDayMonth,
    date: secondDayDate,
    floor: secondDayFloor,
    name: secondDayTeacherName,
  } = secondDay;
  return (
    <>
      <BottomAlert>{`${firstDayMonth}월 ${firstDayDate}일 → ${secondDayMonth}월 ${secondDayDate}일`}</BottomAlert>
      <S.TopContainer>
        <S.TopHeader>교체하시겠습니까?</S.TopHeader>
        <S.Confirm>
          <S.DateWrap>
            <div>
              {firstDayMonth}월 {firstDayDate}일
            </div>
            <div>
              <S.FloorSpan>{firstDayFloor}층</S.FloorSpan> {firstDayTeacherName}
            </div>
          </S.DateWrap>
          <img src={arrowIcon} />
          <S.DateWrap>
            <div>
              {secondDayMonth}월 {secondDayDate}일
            </div>
            <div>
              <S.FloorSpan>{secondDayFloor}층</S.FloorSpan>{" "}
              {secondDayTeacherName}
            </div>
          </S.DateWrap>
        </S.Confirm>
        <S.ButtonWrap>
          <S.Button onClick={rejectChange}>취소</S.Button>
          <Hr />
          <S.Button onClick={resolveChange}>교체</S.Button>
        </S.ButtonWrap>
      </S.TopContainer>
    </>
  );
};

export default CalanderConfirmChangeTeacher;
