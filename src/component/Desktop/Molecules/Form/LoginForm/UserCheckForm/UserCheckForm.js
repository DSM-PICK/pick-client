import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";
import Label from "../../../../Atoms/Label/Label";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAuthenticateSaga,
  setAuthenticateError,
  setName
} from "../../../../../../module/action/account";

const UserCheckForm = () => {
  const authenticateError = useSelector(
    state => state.account.authenticateError
  );

  const dispatch = useDispatch();

  const setUserCheckFormName = useCallback(
    name => {
      dispatch(setName(name));
    },
    [dispatch]
  );
  const authenticateCheck = useCallback(
    authenticationNumber => {
      dispatch(
        requestAuthenticateSaga({ authenticationNumber: authenticationNumber })
      );
    },
    [dispatch]
  );
  const setAuthenticateFormError = useCallback(() => {
    dispatch(setAuthenticateError("이름을 입력해주세요"));
  }, [dispatch]);

  const [checkInfo, setCheckInfo] = useState({
    name: "",
    authenticationNumber: ""
  });

  const onChangeCheckInfo = useCallback(
    e => {
      const { name, value } = e.target;
      setCheckInfo(prev => ({
        ...prev,
        [name]: value
      }));
    },
    [checkInfo]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(checkInfo);
      if (checkInfo.name === "") {
        setAuthenticateFormError();
      } else {
        setUserCheckFormName(checkInfo.name);
        authenticateCheck(checkInfo.authenticationNumber);
      }
    },
    [checkInfo]
  );

  const UserCheckFormStaticData = [
    {
      TagName: Input,
      name: "name",
      type: "text",
      style: S.InputStyle,
      value: checkInfo.name,
      placeholder: "이름을 입력하세요",
      onChange: onChangeCheckInfo
    },
    {
      TagName: Input,
      name: "authenticationNumber",
      type: "text",
      style: S.InputStyle,
      value: checkInfo.authenticationNumber,
      placeholder: "인증번호를 입력하세요",
      onChange: onChangeCheckInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: authenticateError
    },
    {
      TagName: Input,
      name: "submit",
      type: "submit",
      style: S.SubmitStyle,
      value: "다음"
    }
  ];

  return (
    <S.Container onSubmit={onSubmit}>
      {UserCheckFormStaticData.map(
        ({
          TagName,
          name,
          type,
          style,
          value,
          placeholder,
          onClick,
          onChange
        }) => (
          <TagName
            key={name}
            name={name}
            type={type}
            style={style}
            value={value}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
          />
        )
      )}
    </S.Container>
  );
};

export default UserCheckForm;
