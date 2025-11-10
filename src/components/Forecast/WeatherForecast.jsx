import React from "react";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast({ weather }) {
	return (
		<section className="flex flex-col w-full max-w-xl max-h-[650px] p-5 space-y-5 shadow-lg bg-white/10 rounded-xl backdrop-blur-sm">
			<div className="flex flex-col h-full gap-4 overflow-hidden">
				<div className="shrink-0">
					<HourlyForecast weather={weather} />
				</div>
				<div className="flex-1 overflow-y-auto">
					<DailyForecast weather={weather} />
				</div>
			</div>
		</section>
	);
}
