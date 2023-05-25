export function dateFormater(inputDate) {
	let date, month, year;

	date = inputDate.getDate();
	month = inputDate.getMonth() + 1;
	year = inputDate.getFullYear();

	date = date.toString().padStart(2, '0');

	month = month.toString().padStart(2, '0');

	return `${year}-${month}-${date}`;
}

export function dateFormaterWithTime(inputDate) {
	let date, month, year, hours, minutes, seconds;

	date = inputDate.getDate();
	month = inputDate.getMonth() + 1;
	hours = inputDate.getHours().toString().padStart(2, '0');
	minutes = inputDate.getMinutes().toString().padStart(2, '0');
	seconds = inputDate.getSeconds().toString().padStart(2, '0');
	year = inputDate.getFullYear();

	date = date.toString().padStart(2, '0');

	month = month.toString().padStart(2, '0');

	return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}
