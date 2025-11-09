import { useState } from "react";

export default function WeatherForm({ setWeather }) {
	const [city, setCity] = useState("");
	const [error, setError] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		if (!city.trim()) return;

		try {
			const url = import.meta.env.VITE_API_URL;
			const key = import.meta.env.VITE_API_KEY;
			const urlBase = `${url}${city}?key=${key}&unitGroup=metric`;

			const res = await fetch(urlBase);
			if (!res.ok) throw new Error("City not found");
			const data = await res.json();
			setWeather(data);
			setCity("");
			console.log(data);
		} catch (error) {
			if (error.message === "City not found") {
				setError("City not found. Try something else.");
			} else if (error.message === "Failed to fetch") {
				setError(
					"Ubable to connect to server. Please check your internet connection."
				);
			} else {
				setError("An error occured");
			}
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
			<button type="button">Search</button>
		</form>
	);
}
