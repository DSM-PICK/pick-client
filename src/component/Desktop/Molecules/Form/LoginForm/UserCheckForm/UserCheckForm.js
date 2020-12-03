import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";

const UserCheckForm = ({ isAccounted, setIsAccounted }) => {
  const [checkInfo, setCheckInfo] = useState({
    name: "",
    accountCode: ""
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
    },
    [checkInfo]
  );

  return (
    <S.Container onSubmit={onSubmit}>
      <Input
        name={"name"}
        type={"text"}
        style={S.InputStyle}
        value={checkInfo.id}
        placeholder={"이름을 입력하세요"}
        onChange={onChangeCheckInfo}
      />
      <Input
        name={"accountCode"}
        type={"text"}
        style={S.InputStyle}
        value={checkInfo.password}
        placeholder={"인증번호를 입력하세요"}
        onChange={onChangeCheckInfo}
      />
      <div />
      <S.NextButton
        type={"button"}
        onClick={isAccounted => setIsAccounted(!isAccounted)}
        style={S.NextButtonStyle}
      >
        다음
      </S.NextButton>
    </S.Container>
  );
};

export default UserCheckForm;
