import React from "react";
import * as S from "../../styles";

const FormTypeButton = ({ type, setType }) => {
  const getButtonClickHandler = type => {
    return () => setType(type);
  };
  return (
    <S.FormTypeButtonWrapper>
      <S.FormTypeButton
        isActive={type === "이동"}
        onClick={getButtonClickHandler("이동")}
      >
        이동
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "외출"}
        onClick={getButtonClickHandler("외출")}
      >
        외출
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "귀가"}
        onClick={getButtonClickHandler("귀가")}
      >
        귀가
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "현체"}
        onClick={getButtonClickHandler("현체")}
      >
        현체
      </S.FormTypeButton>
    </S.FormTypeButtonWrapper>
  );
};

export default FormTypeButton;
