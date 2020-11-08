import React, { useEffect } from "react";
import * as S from "./styles";
import CalanderHeader from "./CalanderHeader/CalanderHeader";
import CalanderBody from "./CalanderBody/CalanderBody";
import FunctionButtonContainer from "./FunctionButton/FunctionButtonContainer";
import { useDispatch } from "react-redux";
import { getScheduleSaga, setDate } from "../../module/action/calander";

const Calander = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = new Date();
    const year = data.getFullYear();
    const month = data.getMonth();
    dispatch(setDate({ year, month }));
    dispatch(getScheduleSaga());
  }, []);

  return (
    <S.Container>
      <CalanderHeader />
      <CalanderBody />
      <FunctionButtonContainer />
    </S.Container>
  );
};

export default Calander;
