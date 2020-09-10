import React from 'react';
import * as S from './styles';

const PreReportState = (props) => {
	const { stateName, preReportState } = props;
	const { onChangePreReportState } = props;

	return (
		<S.Container
			onClick={() => onChangePreReportState(stateName)}
			stateName={stateName}
			preReportState={preReportState}
		>
			{stateName}
		</S.Container>
	);
};

export default PreReportState;
