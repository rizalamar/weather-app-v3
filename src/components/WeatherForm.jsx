export default function WeatherForm({
	city,
	setCity,
	handleSubmit,
	loading,
	error,
}) {
	return (
		<>
			<form onSubmit={handleSubmit} className="flex gap-3 mb-6">
				<input
					type="text"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					placeholder="Enter a city..."
					className="px-4 py-2 rounded-lg text-slate-900 bg-slate-200"
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
				>
					{loading ? "Searching..." : "Search"}
				</button>
			</form>
			{error && (
				<p role="alert" className="mb-6 font-medium text-red-500">
					{error}
				</p>
			)}
		</>
	);
}
