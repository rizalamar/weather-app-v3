import { getIcon } from "../../helper/helper";

export default function HourlyForecast({ weather }) {
	if (!weather?.days?.length) return null;

	const hours = weather?.days?.[0].hours;
	return (
		<div className="w-full">
			<h2 className="px-3 mb-2 text-lg font-semibold text-center">
				Hourly Forecast
			</h2>

			<div className="flex items-center gap-3 py-2 overflow-x-auto">
				{hours.map((hour, index) => (
					<div
						className="flex flex-col items-center p-3 space-y-2 text-sm rounded-xl bg-white/10 shadow min-w-[60px]"
						key={index}
					>
						<p className="text-xs font-medium">
							{String(hour.datetime).slice(0, 5)}
						</p>
						<img
							src={getIcon(hour.icon)}
							alt={hour.conditions}
							className="w-10 h-10"
						/>
						<p className="text-sm font-semibold">
							{Math.round(hour.temp)}°
						</p>
						<p className="text-xs font-semibold">
							{hour.precipprob
								? `${Math.round(hour.precipprob)}%`
								: "-"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
