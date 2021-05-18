import React, { useCallback, useRef } from "react";
import { uploadExcelFile } from "../../../lib/api/schedule";
import * as S from "../style";

const DScheduleExecl = () => {
  const inputRef = useRef();

  const openInput = useCallback(() => {
    inputRef.current.click();
  }, []);

  const insertExecl = useCallback(async e => {
    const file = e.currentTarget.files[0];

    const fileUrl = e.currentTarget.value;
    const splitUrl = fileUrl.split(".");
    const extension = splitUrl[splitUrl.length - 1];

    if (extension !== "xlsx") {
      alert("엑셀 파일을 업로드해 주세요");
      return;
    }
    try {
      await uploadExcelFile(file);
      alert("파일을 업로드 했습니다");
    } catch (err) {
      alert("파일이 올바르지 않습니다.");
    }
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
