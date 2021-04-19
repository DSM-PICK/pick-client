import React, { useState, useCallback } from "react";
import * as S from "./styles";
import * as authApi from "../../lib/api/auth";
import { LogoPickSvg } from "../../asset";
import { useHistory } from "react-router";

const errMsgMap = {
  ALREADY_EXIST_ACCOUNT: "이미 존재하는 계정입니다",
  INVALID_REQUEST_BODY: "아이디, 비밀번호의 길이와 구성을 다양하게 해주세요",
  AUTHENTICATION_NUMBER_MISMATCH: "인증번호가 불일치 합니다",
  400: "아이디 또는 비밀번호가 일치하지 않습니다"
};

const DPasswordChange = () => {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");
  const [newRegisterData, setNewRegisterData] = useState({
    teacherId: "",
    newPassword: "",
    authenticationNumber: ""
  });

  const changePasswordHandler = useCallback(e => {
    const { name, value } = e.target;
    setNewRegisterData(prev => ({ ...prev, [name]: value }));
  });

  const goAuth = useCallback(() => {
    history.push("/auth");
  }, []);

  const changePasswordSubmtiHandler = useCallback(
    async e => {
      setErrMsg("");
      e.preventDefault();
      try {
        if (!newRegisterData.authenticationNumber) {
          setErrMsg("인증번호를 입력해주세요.");
          return;
        }

        if (!newRegisterData.teacherId) {
          setErrMsg("아이디를 입력해주세요.");
          return;
        }

        if (!newRegisterData.newPassword) {
          setErrMsg("비밀번호를 입력해주세요.");
          return;
        }

        await authApi.reqChangePassword(newRegisterData);
        alert("비밀번호가 변경되었습니다");
        history.push("/auth");
      } catch (err) {
        const code = err.data.code;
        setErrMsg(errMsgMap[code]);
      }
    },
    [newRegisterData]
  );

  return (
    <S.Container>
      <S.AuthWrap>
        <S.AuthHeader>
          <img src={LogoPickSvg} />
          <p>야간 자율학습 출석 관리 시스템</p>
        </S.AuthHeader>
        <S.AuthBody onSubmit={changePasswordSubmtiHandler}>
          <S.FormWrap>
            <S.AuthInput
              placeholder="인증코드"
              autoComplete="off"
              name="authenticationNumber"
              onChange={changePasswordHandler}
              value={newRegisterData.authenticationNumber}
            ></S.AuthInput>
            <S.AuthInput
              placeholder="아이디"
              autoComplete="off"
              name="teacherId"
              onChange={changePasswordHandler}
              value={newRegisterData.teacherId}
            ></S.AuthInput>
            <S.AuthInput
              autoComplete="off"
              placeholder="새 비밀번호"
              name="newPassword"
              type="password"
              onChange={changePasswordHandler}
              value={newRegisterData.newPassword}
            ></S.AuthInput>
          </S.FormWrap>
          <S.ErrWrap>
            {errMsg.length ? <S.ErrorMsg>{errMsg}</S.ErrorMsg> : ""}
          </S.ErrWrap>
          <S.ButtonWrap>
            <S.BlueBtn type="submit">비밀번호 초기화</S.BlueBtn>
            <S.WhiteBtn onClick={goAuth}>돌아가기</S.WhiteBtn>
          </S.ButtonWrap>
          <S.HideBtn type="submit" />
        </S.AuthBody>
      </S.AuthWrap>
    </S.Container>
  );
};

export default DPasswordChange;
