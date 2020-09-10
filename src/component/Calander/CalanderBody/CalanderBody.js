<<<<<<< HEAD:src/component/Calander/CalanderBody/CalanderBody.js
import React from "react";
import * as S from "./styles";
import CalanderAlert from "../../Alert/CalanderAlert";
import CalanderListContainer from "./CalanderList/CalanderListContainer";

const CalanderBody = () => {
  return (
    <S.Container>
      <CalanderListContainer />
      <CalanderAlert />
    </S.Container>
  );
=======
import React, { useState } from 'react';
import getDateObj from '../../../lib/calander';
import CalanderRow from './row/CalanderRow';
import * as S from './styles';

const CalanderBody = () => {
	const [date, setDate] = useState(getDateObj());
	return (
		<S.Container>
			{date.map((dateArr) => (
				<CalanderRow date={dateArr} />
			))}
		</S.Container>
	);
>>>>>>> attendance0:src/component/Calander/body/CalanderBody.js
};

export default CalanderBody;
