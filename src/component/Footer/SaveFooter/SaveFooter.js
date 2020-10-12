import React, { useState } from "react";
import * as S from "./styles";

const SaveFooter = () => {
  const [saveAni, setSaveAni] = useState(false);

  return (
    <S.Container
      onClick={() => {
        setSaveAni(true);
        setTimeout(() => {
          setSaveAni(false);
        }, 1500);
      }}
    >
      저장하기
      <S.Animation saveAni={saveAni} onClick={event => event.stopPropagation()}>
        저장되었습니다
      </S.Animation>
    </S.Container>
  );
};

export default SaveFooter;
