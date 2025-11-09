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
		<section className="flex flex-col items-center w-full max-w-sm p-8 space-y-5 shadow-lg rounded-xl bg-white/10 backdrop-blur-md">
			{/* Current date and time */}
			<DateTime timezone={weather.timezone} />

			{/* Address */}
			<Address location={weather.resolvedAddress} />

			{/* Temp and Icon */}
			<TempIcon
				temp={current.temp}
				icon={current.icon}
				conditions={current.conditions}
			/>

			{/* Condition */}
			<Conditions
				conditions={current.conditions}
				feelslike={current.feelslike}
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
