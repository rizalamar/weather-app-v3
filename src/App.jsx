import React, { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/Card/WeatherCard";
import { getDynamicBackground } from "./helper/helper";
import WeatherForecast from "./components/Forecast/WeatherForecast";

export default function App() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const currentIcon = weather?.currentConditions.icon;
	const bgClass = getDynamicBackground(currentIcon);

	async function handleSubmit(e) {
		e.preventDefault();

		const q = city.trim();
		if (!q) {
			setError("Please enter a city name!");
			return;
		}

		setError("");
		setLoading(true);

		try {
			const rawUrl = import.meta.env.VITE_API_URL || "";
			const apiKey = import.meta.env.VITE_API_KEY || "";

			const base = rawUrl.replace(/\/+$/, "");
			const encodedCity = encodeURIComponent(q);
			const url = `${base}/${encodedCity}?key=${apiKey}&unitGroup=metric`;

			const res = await fetch(url);
			if (!res.ok) {
				const text = await res.text().catch(() => null);
				throw new Error(
					text || res.statusText || `Request failed (${res.status})`
				);
			}
			const data = await res.json();
			setWeather(data);
			setCity("");
			setError("");
		} catch (error) {
			if (error instanceof TypeError) {
				setError(
					"Unable to connect to server. Please check your internet connection!"
				);
			} else if (
				error?.message.toLowerCase().includes("city not found")
			) {
				setError("City not found. Try something else.");
			} else {
				setError(error?.message || "An unexpected error occured.");
			}
			console.error("Fetch error: ", error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const savedWeather = localStorage.getItem("weather-v3");
		if (savedWeather) setWeather(JSON.parse(savedWeather));
	}, []);

	useEffect(() => {
		if (weather) {
			console.log("weather data: ", weather);
			localStorage.setItem("weather-v3", JSON.stringify(weather));
		}
	}, [weather]);

	return (
		<main
			className={`flex flex-col items-center min-h-screen p-6 text-white ${bgClass} transition-colors duration-700`}
		>
			<WeatherForm
				city={city}
				setCity={setCity}
				handleSubmit={handleSubmit}
				error={error}
				loading={loading}
			/>

			<div className="flex items-center justify-center gap-4">
				<WeatherCard weather={weather} />
				<WeatherForecast weather={weather} />
			</div>
		</main>
	);
}
