import { Sunrise, Sunset } from "lucide-react";

export default function SunCycle({ sunrise, sunset }) {
	return (
		<div className="flex justify-between w-full px-6 text-xs">
			<div className="flex items-center gap-2">
				<Sunrise />
				<p>{sunrise}</p>
			</div>
			<div className="flex items-center gap-2">
				<Sunset />
				<p>{sunset}</p>
			</div>
		</div>
	);
}
