import { Droplet, Wind, ThermometerSun, Umbrella } from "lucide-react";

export default function AdditionalConditions({
	humidity,
	windspeed,
	uv,
	precipprob,
}) {
	const items = [
		{ icon: <Droplet />, label: `${Math.round(humidity)}%` },
		{ icon: <Wind />, label: `${Math.round(windspeed)}km/h` },
		{ icon: <ThermometerSun />, label: `${uv}uv` },
		{ icon: <Umbrella />, label: `${Math.round(precipprob)}%` },
	];

	return (
		<div className="grid grid-cols-4 gap-4 text-sm text-center">
			{items.map((item, index) => (
				<div
					className="flex flex-col items-center gap-2 p-2"
					key={index}
				>
					{item.icon}
					<p>{item.label}</p>
				</div>
			))}
		</div>
	);
}
