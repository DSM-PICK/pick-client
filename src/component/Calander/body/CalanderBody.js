import React, { useState } from "react";
import getDateObj from "../../../lib/calander";
import CalanderRow from "./row/CalanderRow";
import * as S from "./styles";

const CalanderBody = () => {
  const [date, setDate] = useState(getDateObj());

  return (
    <S.Container>
      {date.map((dateArr, index) => (
        <CalanderRow key={index} date={dateArr} />
      ))}
    </S.Container>
  );
};

export default CalanderBody;
