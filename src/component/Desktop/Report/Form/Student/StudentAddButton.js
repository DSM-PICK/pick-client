import React from "react";
import * as S from "../../styles";

const StudentAddButton = ({ buttonClickHandler }) => {
  return (
    <S.FormStudentAddItemButton onClick={buttonClickHandler}>
      <div />
    </S.FormStudentAddItemButton>
  );
};

export default StudentAddButton;
