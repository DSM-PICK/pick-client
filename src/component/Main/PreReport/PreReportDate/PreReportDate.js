import React, { useState, useRef, useCallback } from 'react';
import * as S from './styles';
import PreReportCalander from './PreReportCalendar/PreReportCalander';
import PreReportModal from './PreReportModal/PreReportModal';
import getDateObj from '../../../../lib/calander';

const PreReportDate = (props) => {
	const {
		modal,
		height,
		calcDate,
		calcMonth,
		preMonth,
		nextMonth,
		preDay,
		nextDay,
		preClassValue,
		nextClassValue,
		preClassInput,
		nextClassInput,
	} = props;
	const {
		onOffModal,
		onPreClick,
		onNextClick,
		onPreSelect,
		onNextSelect,
		prevCalcMonth,
		nextCalcMonth,
		onSelectDay,
		onPreClassChange,
		onNextClassChange,
	} = props;

	// const date = new Date();

	// const preClassInput = useRef('');
	// const nextClassInput = useRef('');
	// const [calcYear, setCalcYear] = useState(date.getFullYear());
	// const [calcMonth, setCalcMonth] = useState(date.getMonth());
	// const [calcDate, setCalcDate] = useState(getDateObj(calcYear, calcMonth));
	// const [preMonth, setPreMonth] = useState('');
	// const [nextMonth, setNextMonth] = useState('');
	// const [preDay, setPreDay] = useState('');
	// const [nextDay, setNextDay] = useState('');
	// const [preClassValue, setPreClassValue] = useState('');
	// const [nextClassValue, setNextClassValue] = useState('');
	// const [modal, setModal] = useState(false);
	// const [height, setHeight] = useState('30px');
	// const [preNextState, setPreNextState] = useState('');

	// const onOffModal = () => {
	// 	setModal(!modal);
	// };

	// const onPreClick = () => {
	// 	preClassInput.current.blur();
	// 	setHeight('30px');
	// 	setPreNextState('pre');
	// 	onOffModal();
	// };

	// const onNextClick = () => {
	// 	preClassInput.current.blur();
	// 	setHeight('64px');
	// 	setPreNextState('next');
	// 	onOffModal();
	// };

	// const onPreSelect = (day) => {
	// 	setPreMonth(calcMonth + 1);
	// 	setPreDay(day);
	// 	preClassInput.current.focus();
	// };

	// const onNextSelect = (day) => {
	// 	setNextMonth(calcMonth + 1);
	// 	setNextDay(day);
	// 	nextClassInput.current.focus();
	// };

	// const prevCalcMonth = () => {
	// 	if (calcMonth == 0) {
	// 		setCalcYear(calcYear - 1);
	// 		setCalcMonth(11);
	// 	} else {
	// 		setCalcMonth(calcMonth - 1);
	// 	}
	// 	setCalcDate(getDateObj(calcYear - 1, calcMonth - 1));
	// };

	// const nextCalcMonth = () => {
	// 	if (calcMonth == 11) {
	// 		setCalcYear(calcYear + 1);
	// 		setCalcMonth(0);
	// 	} else {
	// 		setCalcMonth(calcMonth + 1);
	// 	}
	// 	setCalcDate(getDateObj(calcYear + 1, calcMonth + 1));
	// };

	// const onSelectDay = (day) => {
	// 	preNextState === 'pre' ? onPreSelect(day) : onNextSelect(day);
	// 	onOffModal();
	// };

	// const onPreClassChange = useCallback((e) => {
	// 	if (Number(e.target.value) > 10) {
	// 		setPreClassValue(10);
	// 	} else if (Number(e.target.value) < 0) {
	// 		setPreClassValue(0);
	// 	} else {
	// 		setPreClassValue(e.target.value);
	// 	}
	// }, []);

	// const onNextClassChange = useCallback((e) => {
	// 	if (Number(e.target.value) > 10) {
	// 		setNextClassValue(10);
	// 	} else if (Number(e.target.value) < 0) {
	// 		setNextClassValue(0);
	// 	} else {
	// 		setNextClassValue(e.target.value);
	// 	}
	// }, []);

	return (
		<S.Container>
			<S.Date onClick={onPreClick}>
				<S.Month month={preMonth}>월</S.Month>
				<S.Day day={preDay}>일</S.Day>
				<S.Class
					type="number"
					min="0"
					max="10"
					placeholder="__"
					ref={preClassInput}
					value={preClassValue}
					onChange={onPreClassChange}
				/>
				<S.ClassText>교시</S.ClassText>
				<S.Additional>~</S.Additional>
			</S.Date>
			<S.Date onClick={onNextClick}>
				<S.Month month={nextMonth}>월</S.Month>
				<S.Day day={nextDay}>일</S.Day>
				<S.Class
					type="number"
					min="0"
					max="10"
					placeholder="__"
					ref={nextClassInput}
					value={nextClassValue}
					onChange={onNextClassChange}
				/>
				<S.ClassText>교시</S.ClassText>
			</S.Date>
			{modal && (
				<PreReportCalander
					height={height}
					calcDate={calcDate}
					calcMonth={calcMonth}
					onOffModal={onOffModal}
					onSelectDay={onSelectDay}
					prevCalcMonth={prevCalcMonth}
					nextCalcMonth={nextCalcMonth}
				/>
			)}
			{modal && <PreReportModal onOffModal={onOffModal} />}
			{console.log(preMonth, preDay, preClassValue)}
		</S.Container>
	);
};

export default PreReportDate;
