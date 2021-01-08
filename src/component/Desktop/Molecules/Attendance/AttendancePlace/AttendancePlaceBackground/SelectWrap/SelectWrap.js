import React from "react";
import * as S from "./styles";

const SelectWrap = () => {
  const SelectArr = [
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    },
    {
      header: "학년",
      bodyItem: ["1학년", "2학년", "3학년", "기타"]
    }
  ];

  return (
    <S.Container>
      {SelectArr.map(data => (
        <S.Select key={data.header}>
          <S.SelectHeader>{data.header}</S.SelectHeader>
          <S.SelectBody>
            {data.bodyItem.map(item => (
              <S.SelectItem key={item}>{item}</S.SelectItem>
            ))}
          </S.SelectBody>
        </S.Select>
      ))}
    </S.Container>
  );
};

export default SelectWrap;
