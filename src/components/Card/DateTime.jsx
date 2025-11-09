import { getDate, getTime } from "../../helper/helper";

export default function DateTime({ timezone }) {
	return (
		<div className="flex flex-col items-center justify-between text-base">
			<p>{getDate(timezone)}</p>
			<p>{getTime(timezone)}</p>
		</div>
	);
}
