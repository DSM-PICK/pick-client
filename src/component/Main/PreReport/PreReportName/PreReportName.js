import React from 'react';
import * as S from './styles';

const PreReportName = (props) => {
	const { name } = props;
	const { onChangeName } = props;
	return (
		<S.Container>
			<S.Name value={name} onChange={onChangeName} />
		</S.Container>
	);
};

export default PreReportName;
