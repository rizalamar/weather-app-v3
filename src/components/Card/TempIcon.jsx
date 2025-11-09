import { getIcon } from "../../helper/helper";

export default function TempIcon({ temp, icon, conditions }) {
	return (
		<div className="flex items-center justify-center w-full gap-6">
			<h1 className="font-medium text-8xl">{Math.round(temp)}°</h1>

			<img
				src={getIcon(icon)}
				alt={conditions}
				className="object-contain w-36 h-36 invert brightness-0"
			/>
		</div>
	);
}
