import React, { useEffect } from "react";
import * as S from "./styles";
import CalanderHeader from "./CalanderHeader/CalanderHeader";
import CalanderBody from "./CalanderBody/CalanderBody";
import FunctionButtonContainer from "./FunctionButton/FunctionButtonContainer";
import { useDispatch } from "react-redux";
import { getScheduleSaga } from "../../module/action/calander";

const Calander = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
