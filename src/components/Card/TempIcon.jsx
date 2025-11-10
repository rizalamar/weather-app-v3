export default function TempIcon({ temp }) {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h1 className=" text-9xl">{Math.round(temp)}°</h1>
		</div>
	);
}
