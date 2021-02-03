import React from "react";
import * as S from "../../styles";

const FormTypeButton = ({ type, setType }) => {
  const getButtonClickHandler = type => {
    return () => setType(type);
  };
  return (
    <S.FormTypeButtonWrapper>
      <S.FormTypeButton
        isActive={type === "move"}
        onClick={getButtonClickHandler("move")}
      >
        이동
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "out"}
        onClick={getButtonClickHandler("out")}
      >
        외출
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "home"}
        onClick={getButtonClickHandler("home")}
      >
        귀가
      </S.FormTypeButton>
      <S.FormTypeButton
        isActive={type === "experience"}
        onClick={getButtonClickHandler("experience")}
      >
        현체
      </S.FormTypeButton>
    </S.FormTypeButtonWrapper>
  );
};

export default FormTypeButton;
