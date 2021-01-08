import React from "react";
import * as S from "./styles";

const SelectWrap = () => {
  return (
    <S.Container>
      <S.Select>
        <S.SelectHeader>학년</S.SelectHeader>
        <S.SelectBody>
          <S.SelectItem>1학년</S.SelectItem>
          <S.SelectItem>2학년</S.SelectItem>
          <S.SelectItem>3학년</S.SelectItem>
          <S.SelectItem>기타</S.SelectItem>
        </S.SelectBody>
      </S.Select>
      <S.Select>
        <S.SelectHeader>반</S.SelectHeader>
        <S.SelectBody>
          <S.SelectItem>1반</S.SelectItem>
          <S.SelectItem>2반</S.SelectItem>
          <S.SelectItem>3반</S.SelectItem>
          <S.SelectItem>4반</S.SelectItem>
        </S.SelectBody>
      </S.Select>
    </S.Container>
  );
};

export default SelectWrap;
