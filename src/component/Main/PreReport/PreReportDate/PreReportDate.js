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
		</S.Container>
	);
};

export default PreReportDate;
