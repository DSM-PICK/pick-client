import React from "react";
import * as S from "./styles";
import NoScheduleWrap from "../../../../../../NoScheduleWrap/NoScheduleWrap";
import { NonScheduleGif } from "../../../../../../../asset/Desktop";

const SelectWrap = props => {
  const { selectArr, currentArr, selectFloorArray, todaySchedule } = props;
  const { onClick } = props;

  const selectWrapData = selectFloorArray[1]?.bodyItem?.length
    ? selectFloorArray
    : selectArr;

  if (todaySchedule === "self-study") {
    return (
      <S.Container>
        <NoScheduleWrap text={"오늘은 일정이 없습니다."} gif={NonScheduleGif} />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {selectWrapData.map((data, rowIndex) => (
        <S.Select key={data.header}>
          <S.SelectHeader>{data.header}</S.SelectHeader>
          <S.SelectBody>
            {data.bodyItem.length === 0 && (
              <S.SelectItem>데이터가 없습니다.</S.SelectItem>
            )}
            {data.bodyItem.map((item, colIndex) => (
              <S.SelectItem
                key={item}
                select={currentArr[rowIndex] === colIndex}
                onClick={() => onClick(rowIndex, colIndex)}
              >
                {item || "데이터가 없습니다."}
              </S.SelectItem>
            ))}
          </S.SelectBody>
        </S.Select>
      ))}
    </S.Container>
  );
};

export default React.memo(SelectWrap);
