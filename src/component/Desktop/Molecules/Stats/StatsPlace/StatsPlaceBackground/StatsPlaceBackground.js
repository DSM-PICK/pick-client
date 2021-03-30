import React from "react";
import Button from "../../../../Atoms/Button/Button";
import * as S from "./style";

const StatsPlaceBackground = props => {
  const {
    nowUngranted,
    textButtonData,
    classItemData,
    clickedPriorityArrPriority
  } = props;
  const { onClickFastSearchBtn, onTextButtonClick, onClassItemClick } = props;

  // console.log(`classItemData, clickedPriorityArrPriority`);
  // console.log(classItemData, clickedPriorityArrPriority);

  return (
    <S.Container>
      <S.ButtonWrap>
        <Button
          text={"빠른 조회하기"}
          css={S.HeaderButtonCSS}
          onClick={nowUngranted ? void "" : onClickFastSearchBtn}
          buttonDisabled={nowUngranted}
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
              isClicked={clickedPriorityArrPriority === data.priority}
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
