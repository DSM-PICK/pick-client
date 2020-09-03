import React, { useState } from 'react';
import * as S from './styles';
import PreReportCalander from './PreReportCalendar/PreReportCalander';
import PreReportModal from './PreReportModal/PreReportModal';

const PreReportDate = () => {
	const [preMonth, setPreMonth] = useState('');
	const [preDay, setPreMDay] = useState('');
	const [preClassValue, setPreClassValue] = useState('');
	const [nextMonth, setNextMonth] = useState('');
	const [nextDay, setNextDay] = useState('');
	const [nextClassValue, setNextClassValue] = useState('');
	const [modal, setModal] = useState(true);
	const [height, setHeight] = useState('30px');

	const onOffModal = () => {
		setModal(!modal);
	};

	const onPreClick = () => {
		setHeight('30px');
		onOffModal();
	};

	const onNextClick = () => {
		setHeight('60px');
		onOffModal();
	};

	return (
		<S.Container>
			<S.Date onClick={onPreClick}>
				<S.Month month={preMonth}>월</S.Month>
				<S.Day day={preDay}>일</S.Day>
				<S.Class classValue={preClassValue}>교시</S.Class>
				<S.Additional>~</S.Additional>
			</S.Date>
			<S.Date onClick={onNextClick}>
				<S.Month month={nextMonth}>월</S.Month>
				<S.Day day={nextDay}>일</S.Day>
				<S.Class classValue={nextClassValue}>교시</S.Class>
			</S.Date>
			{modal && <PreReportCalander height={height} />}
			{modal && <PreReportModal onOffModal={onOffModal} />}
		</S.Container>
	);
};

export default PreReportDate;
