import { getIcon } from "../../helper/helper";

export default function Conditions({ conditions, feelslike, icon }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<img
				src={getIcon(icon)}
				alt={conditions}
				className="object-contain w-30 h-30 invert brightness-0"
			/>
			<p className="text-2xl font-medium">{conditions}</p>
			<p className="text-sm">Feels like {feelslike}°C</p>
		</div>
	);
}
