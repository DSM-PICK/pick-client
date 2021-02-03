import React from "react";
import * as S from "../../styles";

const Description = ({ description, setDescription }) => {
  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };
  console.log(description);
  return (
    <S.FormColumn>
      <S.FormText>비고</S.FormText>
      <S.FormDescriptionInput
        value={description}
        onChange={descriptionChangeHandler}
      />
    </S.FormColumn>
  );
};

export default Description;
