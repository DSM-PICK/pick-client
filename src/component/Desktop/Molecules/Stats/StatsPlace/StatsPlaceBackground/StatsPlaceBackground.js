import React from "react";
import Button from "../../../../Atoms/Button/Button";
import * as S from "./style";

const StatsPlaceBackground = props => {
  const {
    nowUngranted,
    textButtonData,
    classItemData,
    buttonDisabledBySchedule,
    clickedPriorityArrPriority
  } = props;
  const { onClickFastSearchBtn, onTextButtonClick, onClassItemClick } = props;

  return (
    <S.Container>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={
            buttonDisabledBySchedule || nowUngranted
              ? void ""
              : onClickFastSearchBtn
          }
          buttonDisabled={buttonDisabledBySchedule || nowUngranted}
        />
      </S.ButtonWrap>
      <S.FloorWrap>
        {textButtonData.map((data, index) => (
          <S.FloorTextButton
            key={data.text}
            isClicked={data.isClicked}
            onClick={() => onTextButtonClick(index)}
          >
            {data.text}
          </S.FloorTextButton>
        ))}
      </S.FloorWrap>
      <S.ClassWrapOfClickedFloor>
        {classItemData.length ? (
          classItemData.map((data, index) => (
            <S.ClassItemOfClickedFloor
              key={data.text}
              isClicked={clickedPriorityArrPriority === index}
              onClick={() => onClassItemClick(index)}
            >
              {data.text}
            </S.ClassItemOfClickedFloor>
          ))
        ) : (
          <S.ClassItemOfClickedFloor isNodata={true}>
            교실이 없습니다.
          </S.ClassItemOfClickedFloor>
        )}
      </S.ClassWrapOfClickedFloor>
    </S.Container>
  );
};

export default StatsPlaceBackground;
