export default function Conditions({ conditions, feelslike }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<p className="text-2xl font-medium">{conditions}</p>
			<p className="text-sm">Feels like {feelslike}°C</p>
		</div>
	);
}
