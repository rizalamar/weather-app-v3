import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/Card/WeatherCard";
import { getDynamicBackground } from "./helper/helper";
import WeatherForecast from "./components/Forecast/WeatherForecast";

export default function App() {
	const DEFAULT_CITY = "London";

	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const currentIcon = weather?.currentConditions.icon;
	const bgClass = getDynamicBackground(currentIcon);

	async function fetchWeather(q) {
		const rawUrl = import.meta.env.VITE_API_URL || "";
		const apiKey = import.meta.env.VITE_API_KEY || "";
		const base = rawUrl.replace(/\/+$/, "");
		const encodedCity = encodeURIComponent(q);
		const url = `${base}/${encodedCity}?key=${apiKey}&unitGroup=metric`;

		setError("");
		setLoading(true);

		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Request failed (${res.status})`);
			const data = await res.json();
			setWeather(data);
			localStorage.setItem("weather-v3", JSON.stringify(data));
			return data;
		} catch (error) {
			if (error instanceof TypeError) {
				console.error("Fetch error:", error);
				setError(
					error?.message ||
						"An unexpected error occurred. Please try again later."
				);
			}
		} finally {
			setLoading(false);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const q = city.trim();
		if (!q) {
			setError("Please enter a city name!");
			return;
		}

		fetchWeather(q);
		setCity("");
	}

	useEffect(() => {
		const savedWeather = localStorage.getItem("weather-v3");
		if (savedWeather) {
			setWeather(JSON.parse(savedWeather));
		} else {
			fetchWeather(DEFAULT_CITY);
		}
	}, []);

	return (
		<main
			className={`flex flex-col items-center min-h-screen p-4 sm:p-6 lg:p-10 text-white ${bgClass} transition-colors duration-700`}
		>
			<WeatherForm
				city={city}
				setCity={setCity}
				handleSubmit={handleSubmit}
				error={error}
				loading={loading}
			/>

			<div className="flex flex-col items-center justify-center gap-4 sm:flex-row w-full max-w-6xl">
				<WeatherCard weather={weather} />
				<WeatherForecast weather={weather} />
			</div>
		</main>
	);
}
