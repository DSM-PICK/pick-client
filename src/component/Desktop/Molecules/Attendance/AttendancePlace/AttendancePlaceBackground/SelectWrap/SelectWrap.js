import React from "react";
import * as S from "./styles";
import NoScheduleWrap from "../../../../../../NoScheduleWrap/NoScheduleWrap";
import { NonScheduleGif2 } from "../../../../../../../asset/Desktop";

const SelectWrap = props => {
  const { selectArr, currentArr, selectFloorArray, todaySchedule } = props;
  const { onClick } = props;

  const selectWrapData = selectFloorArray[1]?.bodyItem?.length
    ? selectFloorArray
    : selectArr;

  const scheduleArr = ["self-study", "after-school", "club"];
  if (!~scheduleArr.findIndex(schedule => schedule === todaySchedule)) {
    return (
      <S.Container>
        <NoScheduleWrap
          gif={NonScheduleGif2}
          gifSize="53% 40% / 36%"
          textPadding="30px 0"
        />
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
