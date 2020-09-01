import React, { useState } from 'react';
import * as S from './styles';
import * as C from './Constant';
import PreReportState from './PreReportState/PreReportState';

const PreReport = () => {
	const [preReportState, setPreReportState] = useState(['외출']);

	const onChangePreReportState = (changeState) => {
		setPreReportState(changeState);
	};

	console.log(preReportState);

	return (
		<S.Container>
			<S.Func>
				<S.FuncKindName>
					<S.FuncTitle>종류</S.FuncTitle>
					<S.PreReportStates>
						{C.PreReportStates.map((state) => (
							<PreReportState
								key={state}
								stateName={state}
								preReportState={preReportState}
								onChangePreReportState={onChangePreReportState}
							/>
						))}
					</S.PreReportStates>
				</S.FuncKindName>
				<S.FuncKindName>
					<S.FuncTitle>이름</S.FuncTitle>
				</S.FuncKindName>
				<S.FuncDate>
					<S.FuncTitle>날짜</S.FuncTitle>
				</S.FuncDate>
				<S.FuncAdd>추가하기</S.FuncAdd>
			</S.Func>
			<S.Show></S.Show>
		</S.Container>
	);
};

export default PreReport;
