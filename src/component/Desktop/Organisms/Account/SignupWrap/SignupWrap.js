import React, { useCallback, useEffect } from "react";
import * as S from "./styles";
import CenterLink from "../../../Atoms/Link/CenterLink/CenterLink";
import Img from "../../../Atoms/Img/Img";
import SignupForm from "../../../Molecules/Form/LoginForm/SignupForm/SignupForm";
import { LogoPick } from "../../../../../asset";
import UserCheckForm from "../../../Molecules/Form/LoginForm/UserCheckForm/UserCheckForm";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthenticateError,
  setIsAccounted,
  setSignUpError
} from "../../../../../module/action/account";

const SignupWrap = () => {
  const isAccounted = useSelector(state => state.account.isAccounted);

  const dispatch = useDispatch();

  const setAccountedOpposite = useCallback(
    accountedState => {
      dispatch(setIsAccounted(!accountedState));
    },
    [dispatch]
  );
  const setAuthenticateFormError = useCallback(
    error => {
      dispatch(setAuthenticateError(error));
    },
    [dispatch]
  );
  const setSignupFormError = useCallback(
    error => {
      dispatch(setSignUpError(error));
    },
    [dispatch]
  );

  const changeAccountedState = () => {
    setAccountedOpposite(isAccounted);
    setSignupFormError("");
    setAuthenticateFormError("");
  };

  useEffect(() => {
    setSignupFormError("");
    setAuthenticateFormError("");
  }, [dispatch]);

  return (
    <S.Container>
      <S.ImgWrap>
        <Img img={LogoPick} style={S.ImgStyle} />
      </S.ImgWrap>
      {!isAccounted ? (
        <>
          <UserCheckForm />
          <CenterLink
            to={"/login"}
            text={"이미 계정이 있습니다"}
            style={S.LinkStyle}
          />
        </>
      ) : (
        <>
          <SignupForm />
          <S.BackButton onClick={changeAccountedState} {...S.LinkStyle}>
            이전으로 돌아가기
          </S.BackButton>
        </>
      )}
    </S.Container>
  );
};

export default SignupWrap;
