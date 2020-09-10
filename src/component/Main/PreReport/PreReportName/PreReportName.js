import React from 'react';
import * as S from './styles';
import NameSelect from './NameSelect/NameSelect';

const PreReportName = (props) => {
	const { name } = props;
	const { onChangeName } = props;
	return (
		<S.Container>
			<S.Name value={name} onChange={onChangeName} />
			<NameSelect />
		</S.Container>
	);
};

export default PreReportName;
