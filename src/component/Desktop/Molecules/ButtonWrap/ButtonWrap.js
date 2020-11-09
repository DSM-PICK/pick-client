import React from "react";
import Button from "../../../Atoms/Button/Button";
import * as S from "./styles";

const Style = {
  width: "auto",
  height: "auto",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  background: "none"
};

const InitialValue = [
  {
    text: "출석 하기",
    link: ""
  },
  {
    text: "결석 신고",
    link: ""
  },
  {
    text: "출석 통계",
    link: ""
  },
  {
    text: "동아리",
    link: ""
  }
];

const ButtonWrap = () => {
  return (
    <S.Container>
      {InitialValue.map(value => {
        <Button key={value.text} value={value} css={Style} />;
      })}
    </S.Container>
  );
};

export default ButtonWrap;
