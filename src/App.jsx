import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

export default function App() {
	const [weather, setWeather] = useState(null);
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-slate-900">
			<WeatherForm setWeather={setWeather} />
			{weather && <WeatherCard />}
		</main>
	);
}
