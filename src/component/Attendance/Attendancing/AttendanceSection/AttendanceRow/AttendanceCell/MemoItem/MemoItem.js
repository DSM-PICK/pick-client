import React, { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";

const MemoItem = props => {
  const { onWriteMemo, writeMemoByInput } = props;

  const memoFloorData = useSelector(state => state.dAttendance.memoFloorData);

  const [selectIndex, setSelectIndex] = useState(0);
  const floorData = useMemo(() => memoFloorData.map(data => data.floor), [
    memoFloorData
  ]);
  const classData = useMemo(() => memoFloorData.map(data => data.floorData), [
    memoFloorData
  ]);

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
        {floorData.map((data, mapIndex) => (
          <S.FloorItem key={data} onClick={() => onClickFloor(mapIndex)}>
            {data}
          </S.FloorItem>
        ))}
      </S.FloorWrap>
      <S.ClassWrap>
        {classData[selectIndex].map(data => (
          <S.ClassItem key={data} onClick={() => onClickClass(data)}>
            {data}
          </S.ClassItem>
        ))}
      </S.ClassWrap>
    </S.Container>
  );
};

export default MemoItem;
