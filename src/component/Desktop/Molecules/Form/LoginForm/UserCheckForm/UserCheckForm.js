import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Input from "../../../../Atoms/Input/Input";
import Label from "../../../../Atoms/Label/Label";
import Button from "../../../../Atoms/Button/Button";

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
      name: "accountCode",
      type: "text",
      style: S.InputStyle,
      value: checkInfo.accountCode,
      placeholder: "인증번호를 입력하세요",
      onChange: onChangeCheckInfo
    },
    {
      TagName: Label,
      name: "errorLabel",
      style: S.LabelStyle,
      value: "가입코드가 올바르지 않습니다"
    },
    {
      TagName: Button,
      name: "submit",
      type: "submit",
      style: S.SubmitStyle,
      value: "다음",
      onClick: isAccounted => {
        setIsAccounted(!isAccounted);
      }
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
