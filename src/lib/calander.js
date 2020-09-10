const getDateObj = (
	yearData,
	monthData,
	dayArr = ['일', '월', '화', '수', '목', '금', '토'],
) => {
	const calanderArr = [];

	const date = new Date();

	if (monthData < 0) {
		yearData -= 1;
		monthData = 11;
	} else if (monthData > 11) {
		yearData += 1;
		monthData = 0;
	}

	const year = !isNaN(yearData) ? yearData : date.getFullYear();
	const month = !isNaN(monthData) ? monthData : date.getMonth();

	const thisMonthFirstDay = new Date(year, month, 1).getDay();
	const thisMonthLastDateObj = new Date(year, month + 1, 0);
	const thisMonthLastDate = thisMonthLastDateObj.getDate();
	const prevMonthLastDay = new Date(year, month, 0).getDate();
	const falseDateLength = 6 - (6 - thisMonthFirstDay);

	for (let i = 1; i <= thisMonthLastDate; i++) {
		calanderArr.push({
			date: i,
			month: month + 1,
			isActive: true,
		});
	}

	for (let i = 0; i < falseDateLength; i++) {
		calanderArr.unshift({
			date: prevMonthLastDay - i,
			month,
			isActive: false,
		});
	}

	for (let i = 41; calanderArr.length <= 41; i--) {
		calanderArr.push({
			date: 42 - i,
			month: month + 2 > 12 ? 1 : month + 2,
			isActive: false,
		});
	}

	for (let i = 0; i < calanderArr.length; i++) {
		calanderArr[i].day = dayArr[i % 7];
	}

	const splitArr = [];
	for (let i = 0; i < 6; i++) {
		splitArr.push(calanderArr.splice(1, 5));
		calanderArr.splice(0, 2);
	}

	return splitArr;
};

export default getDateObj;
