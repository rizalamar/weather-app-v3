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
		<section className="flex flex-col items-center justify-evenly w-full max-w-md lg:max-w-md p-5 shadow-lg rounded-xl backdrop-blur-sm text-slate-900 bg-sky-100/40 overflow-x-auto h-auto sm:h-[700px] max-h-[700px]">
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
