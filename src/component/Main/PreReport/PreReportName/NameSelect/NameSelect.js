import React, { useState } from 'react';
import * as S from './styles';
import ExName from './ExName/ExName';
import PreReportModal from '../../PreReportDate/PreReportModal/PreReportModal';

const NameSelect = () => {
	const names = [
		{
			name: '2201 유시온',
		},
		{
			name: '2202 유시온',
		},
		{
			name: '2203 유시온',
		},
		{
			name: '2204 유시온',
		},
		{
			name: '2202 이진혁',
		},
		{
			name: '2202 손정우',
		},
		{
			name: '2203 손정우',
		},
		{
			name: '2204 손정우',
		},
	];

	const [modal, setModal] = useState(false);

	const onOffModal = () => {
		setModal(!modal);
	};

	return (
		<S.Container>
			{names.map((name) => (
				<ExName key={name.name} name={name} />
			))}
			{modal && <PreReportModal onOffModal={onOffModal} />}
		</S.Container>
	);
};

export default NameSelect;
