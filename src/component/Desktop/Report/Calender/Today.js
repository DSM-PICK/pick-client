import React from "react";
import * as S from "../styles";

const Today = () => {
  const todayDateObj = new Date();
  const today = {
    year: todayDateObj.getFullYear(),
    month: todayDateObj.getMonth() + 1
  };
  const calenderButtonClickHandler = () => {
    document.getElementById("todayMonth").scrollIntoView();
    window.scrollTo(0, 0);
  };
  return (
    <S.CalenderToday>
      <p>
        {today.year}년 {today.month}월
      </p>
      <S.CalenderButton onClick={calenderButtonClickHandler}>
        오늘
      </S.CalenderButton>
    </S.CalenderToday>
  );
};

export default Today;
