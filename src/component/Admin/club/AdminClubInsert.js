import React, { useCallback, useRef } from "react";
import * as S from "./styles";
import { adminBackground, fileIcon } from "../../../asset";
import { uploadStudent } from "../../../lib/api/insert";

const AdminClubInsert = () => {
  const inputRef = useRef();
  const clickHandler = useCallback(() => {
    inputRef.current.click();
  }, []);

  const changeHandler = useCallback(async e => {
    const file = e.target.files[0];
    try {
      await uploadStudent(file);
      alert("성공적으로 업로드 했습니다");
    } catch (err) {}
  }, []);

  return (
    <S.Container>
      <S.Header>학생 데이터 삽입</S.Header>
      <S.Body>
        <S.UploadWrap>
          <S.HiddenInput onChange={changeHandler} type="file" ref={inputRef} />
          <img src={fileIcon} />
          <S.UploadText>이곳으로 파일 드래그 또는,</S.UploadText>
          <S.UploadBtn onClick={clickHandler}>파일 업로드</S.UploadBtn>
        </S.UploadWrap>
      </S.Body>
      <S.BackgroundImg src={adminBackground} />
    </S.Container>
  );
};

export default AdminClubInsert;
