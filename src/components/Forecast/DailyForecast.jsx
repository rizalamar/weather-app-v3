import React from "react";
import { getShortDay, getIcon } from "../../helper/helper";

export default function DailyForecast({ weather }) {
	const daily = weather?.days.slice(0, 10) || [];

	const minTemp = Math.min(...daily.map((d) => d.tempmin));
	const maxTemp = Math.max(...daily.map((d) => d.tempmax));

	return (
		<div className="h-full px-1">
			<h2 className="px-3 mb-2 text-lg font-semibold">10-Day Forecast</h2>
			<div className="flex flex-col items-stretch gap-3 py-2 overflow-y-auto">
				{daily?.map((day) => (
					<div
						className="flex items-center justify-between gap-4 p-3 rounded-md shadow bg-white/10"
						key={day.datetime}
					>
						<div className="w-10 text-sm font-medium text-center">
							{getShortDay(day.datetime)}
						</div>

						<img
							src={getIcon(day.icon)}
							alt={day.conditions}
							className="w-10 h-10 invert"
						/>

						<div className="w-12 font-semibold">
							{day.precipprob
								? `${Math.round(day.precipprob)}%`
								: ""}
						</div>

						<div className="flex items-center flex-1 gap-2">
							<span className="text-xs text-gray-300">
								{Math.round(day.tempmin)}°
							</span>
							<div className="relative w-full h-2 rounded bg-gray-300/30">
								<div
									className="absolute h-2 rounded bg-yellow-300/80"
									style={{
										left: `${
											((day.tempmin - minTemp) /
												(maxTemp - minTemp)) *
											100
										}%`,
										width: `${
											((day.tempmax - day.tempmin) /
												(maxTemp - minTemp)) *
											100
										}%`,
									}}
								></div>
							</div>
							<span className="text-xs text-gray-300">
								{Math.round(day.tempmax)}°
							</span>
						</div>

						<p className="text-sm">{Math.round(day.temp)}°</p>
					</div>
				))}
			</div>
		</div>
	);
}
