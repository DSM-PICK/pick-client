import React, { useCallback, useRef } from "react";
import * as S from "../style";

const DScheduleExecl = () => {
  const inputRef = useRef();

  const openInput = useCallback(() => {
    inputRef.current.click();
  }, []);

  const insertExecl = useCallback(e => {
    const file = e.target.files[0];
  }, []);

  return (
    <S.DScheduleExecl>
      <div>일정 넣기</div>
      <S.ExeclBtn onClick={openInput}>엑셀로 삽입</S.ExeclBtn>
      <S.HideInput ref={inputRef} type="file" onChange={insertExecl} />
    </S.DScheduleExecl>
  );
};

export default DScheduleExecl;
