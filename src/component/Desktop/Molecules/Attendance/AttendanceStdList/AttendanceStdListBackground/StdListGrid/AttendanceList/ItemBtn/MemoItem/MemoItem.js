import React, { useCallback, useState } from "react";
import * as S from "./style";

const MemoItem = props => {
  const { onWriteMemo, writeMemoByInput } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const FloorClassData = [
    {
      floor: "4층",
      floorData: [
        "세미나실 2-1",
        "세미나실 2-2",
        "세미나실 2-3",
        "세미나실 2-4",
        "1학년 1반",
        "1학년 2반"
      ]
    },
    {
      floor: "3층",
      floorData: [
        "세미나실 3-1",
        "세미나실 3-2",
        "세미나실 3-3",
        "세미나실 3-4"
      ]
    },
    {
      floor: "2층",
      floorData: [
        "세미나실 4-1",
        "세미나실 4-2",
        "세미나실 4-3",
        "세미나실 4-4"
      ]
    },
    {
      floor: "입력",
      floorData: []
    }
  ];
  const FloorData = FloorClassData.map(data => data.floor);
  const ClassData = FloorClassData.map(data => data.floorData);

  const onClickFloor = useCallback(idx => {
    if (idx === 3) {
      writeMemoByInput();
    } else {
      setSelectIndex(idx);
    }
  }, []);
  const onClickClass = useCallback(className => {
    onWriteMemo(className);
  }, []);

  return (
    <S.Container>
      <S.FloorWrap>
        {FloorData.map((data, mapIndex) => (
          <S.FloorItem key={data} onClick={() => onClickFloor(mapIndex)}>
            {data}
          </S.FloorItem>
        ))}
      </S.FloorWrap>
      <S.ClassWrap>
        {ClassData[selectIndex].map(data => (
          <S.ClassItem key={data} onClick={() => onClickClass(data)}>
            {data}
          </S.ClassItem>
        ))}
      </S.ClassWrap>
    </S.Container>
  );
};

export default MemoItem;
