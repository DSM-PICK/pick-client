import React, { useCallback, useRef, useState } from "react";
import SectionBtn from "./SectionBtn/SectionBtn";
import SectionInput from "./SectionInput/SectionInput";
import PasswordEye from "../../../../default/PasswordEye/PasswordEye";
import * as S from "./styles";
import { loginActionCreater } from "../../../../../module/action/login";
import { useDispatch } from "react-redux";

const SectionForm = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    id: "",
    password: ""
  });
  const [typeIsPassword, setTypeIsPassword] = useState(true);
  const passwordRef = useRef();

  const changeShowPassword = useCallback(() => {
    setTypeIsPassword(prev => !prev);
    passwordRef.current.focus();
  }, []);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginActionCreater.requestAdminLoginSaga(loginData));
    },
    [loginData]
  );

  return (
    <S.Container onSubmit={onSubmit}>
      <div>
        <SectionInput
          value={loginData.id}
          onChange={onChange}
          name="id"
          ph_text="아이디를 입력하세요"
          type="text"
        />
      </div>
      <S.PasswordWrap>
        <SectionInput
          value={loginData.password}
          name="password"
          onChange={onChange}
          customRef={passwordRef}
          ph_text="비밀번호를 입력하세요"
          type={typeIsPassword ? "password" : "text"}
        />
        <PasswordEye
          onClick={changeShowPassword}
          showPassword={typeIsPassword}
        />
      </S.PasswordWrap>
      <SectionBtn />
    </S.Container>
  );
};

export default SectionForm;
