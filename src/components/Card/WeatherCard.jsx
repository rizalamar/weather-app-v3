import { Sunrise, Sunset } from "lucide-react";
import DateTime from "./DateTime";
import Address from "./Address";
import TempIcon from "./TempIcon";
import Conditions from "./Conditions";
import AdditionalConditions from "./AdditionalConditions";
import SunCycle from "./SunCycle";

export default function WeatherCard({ weather }) {
	const current = weather?.currentConditions;

	if (!current) return null;

	return (
		<section className="flex flex-col items-center w-full max-h-[650px] h-[650px] max-w-sm p-5 space-y-5 shadow-lg rounded-xl bg-white/10 backdrop-blur-sm">
			{/* Current date and time */}
			<DateTime timezone={weather.timezone} />

			{/* Address */}
			<Address location={weather.resolvedAddress} />

			{/* Temp and Icon */}
			<TempIcon temp={current.temp} />

			{/* Condition */}
			<Conditions
				conditions={current.conditions}
				feelslike={current.feelslike}
				icon={current.icon}
			/>

			{/* Additional Info */}
			<AdditionalConditions
				humidity={current.humidity}
				windspeed={current.windspeed}
				uv={current.uvindex}
				precipprob={current.precipprob}
			/>

			{/* Sunrise and Sunset */}
			<SunCycle sunrise={current.sunrise} sunset={current.sunset} />
		</section>
	);
}
