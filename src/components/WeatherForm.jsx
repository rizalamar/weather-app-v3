import { useState } from "react";

export default function WeatherForm({ setWeather }) {
	const [city, setCity] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

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
			console.log("weather data: ", data);
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

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="Enter a city..."
			/>
			<button type="submit">{loading ? "Searching..." : "Search"}</button>
			{error && (
				<p role="alert" className="">
					{error}
				</p>
			)}
		</form>
	);
}
