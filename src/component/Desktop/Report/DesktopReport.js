import React from "react";
import * as S from "./styles";
import Calender from "./Calender";
import Form from "./Form";
import List from "./List";

const DesktopReport = ({ state, setState }) => {
  return (
    <S.DesktopReport>
      <div>
        <Calender />
      </div>
      <div>
        <Form />
        <List />
      </div>
    </S.DesktopReport>
  );
};

export default DesktopReport;
