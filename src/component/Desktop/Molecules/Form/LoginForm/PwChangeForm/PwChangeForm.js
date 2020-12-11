import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";
import Label from "../../../../Atoms/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignUpSaga,
  setSignUpError
} from "../../../../../../module/action/account";

const PwChangeForm = () => {
  const signupError = useSelector(state => state.account.signupError);
  const name = useSelector(state => state.account.name);

  const dispatch = useDispatch();

  const setSignUpFormError = useCallback(
    error => {
      dispatch(setSignUpError(error));
    },
    [dispatch]
  );

  const signUp = useCallback(
    (name, loginInfo) => {
      console.log(name);
      dispatch(requestSignUpSaga({ name, ...loginInfo }));
    },
    [dispatch]
  );

  const [loginInfo, setLoginInfo] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const loginInfo2Korean = {
    newPassword: "비밀번호",
    confirmPassword: "비밀번호 재입력"
  };

  const onChangeLoginInfo = useCallback(
    e => {
      const { name, value } = e.target;
      setLoginInfo(prev => ({
        ...prev,
        [name]: value
      }));
    },
    [loginInfo]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      for (let info in loginInfo) {
        if (loginInfo[info] === "") {
          setSignUpFormError(`${loginInfo2Korean[info]} 칸이 비어있습니다`);
          return;
        }
      }

      if (loginInfo.password !== loginInfo.confirmPassword) {
        setSignUpFormError("비밀번호를 다시 확인해주세요");
      }

      signUp(name, loginInfo);
      console.log("비밀번호 변경 성공");
    },
    [loginInfo]
  );

  const SignupFormStaticData = [
    {
      TagName: Input,
      name: "newPassword",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.password,
      placeholder: "새로운 비밀번호를 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Input,
      name: "confirmPassword",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.confirmPassword,
      placeholder: "새로운 비밀번호가 다시 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: signupError
    },
    {
      TagName: Input,
      name: "submit",
      type: "submit",
      style: S.SubmitStyle,
      value: "비밀번호 변경"
    }
  ];

  return (
    <S.Container onSubmit={onSubmit}>
      {SignupFormStaticData.map(
        ({ TagName, name, type, style, value, placeholder, onChange }) => (
          <TagName
            key={name}
            name={name}
            type={type}
            style={style}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        )
      )}
    </S.Container>
  );
};

export default PwChangeForm;
