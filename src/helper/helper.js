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

export function getDynamicBackground(conditions) {
	const weatherBackgrounds = {
		"clear-day": "bg-linear-to-b from-blue-400 to-blue-200",
		"clear-night": "bg-linear-to-b from-indigo-500 to-gray-900",
		"partly-cloudy-day": "bg-linear-to-b from-blue-300 to-gray-200",
		"partly-cloudy-night": "bg-linear-to-b from-gray-700 to-gray-900",
		cloudy: "bg-gradient-to-b from-gray-400 to-gray-600",
		rain: "bg-gradient-to-b from-gray-500 to-blue-400",
		snow: "bg-gradient-to-b from-blue-100 to-white",
		fog: "bg-gradient-to-b from-gray-300 to-gray-500",
		wind: "bg-gradient-to-b from-sky-300 to-sky-500",
	};

	return (
		weatherBackgrounds[conditions] ||
		"bg-linear-to-b from-neutral-50 to-neutral-200"
	);
}
