export function getIcon(icon) {
	return `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/3rd%20Set%20-%20Monochrome/${icon}.svg`;
}

export function getDate(timezone) {
	const date = new Date();

	const datePart = new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
		timeZone: timezone || undefined,
	}).format(date);

	return datePart;
}

export function getTime(timezone) {
	const date = new Date();

	const timePart = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		timeZone: timezone || undefined,
	}).format(date);

	return timePart;
}
