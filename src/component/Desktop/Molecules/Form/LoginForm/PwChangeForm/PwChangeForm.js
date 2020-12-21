import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";
import Label from "../../../../Atoms/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  requestPwChangeSaga,
  setPwChangeError
} from "../../../../../../module/action/account";

const PwChangeForm = () => {
  const pwChangeError = useSelector(state => state.account.pwChangeError);

  const dispatch = useDispatch();

  const setPwChangeFormError = useCallback(
    error => {
      dispatch(setPwChangeError(error));
    },
    [dispatch]
  );

  const pwChange = useCallback(
    loginInfo => {
      dispatch(requestPwChangeSaga({ ...loginInfo }));
    },
    [dispatch]
  );

  const [loginInfo, setLoginInfo] = useState({
    newPassword: "",
    confirmNewPassword: ""
  });
  const loginInfo2Korean = {
    newPassword: "비밀번호",
    confirmNewPassword: "비밀번호 재입력"
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
          setPwChangeFormError(`${loginInfo2Korean[info]} 칸이 비어있습니다`);
          return;
        }
      }

      if (loginInfo.newPassword !== loginInfo.confirmNewPassword) {
        setPwChangeFormError("비밀번호가 일치하지 않습니다");
        return;
      }

      pwChange(loginInfo);
    },
    [loginInfo]
  );

  const PwChangeFormStaticData = [
    {
      TagName: Input,
      name: "newPassword",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.newPassword,
      placeholder: "새로운 비밀번호를 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Input,
      name: "confirmNewPassword",
      type: "password",
      style: S.InputStyle,
      value: loginInfo.confirmNewPassword,
      placeholder: "새로운 비밀번호를 다시 입력하세요",
      onChange: onChangeLoginInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: pwChangeError
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
      {PwChangeFormStaticData.map(
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
