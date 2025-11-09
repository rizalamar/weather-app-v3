import React from "react";

export default function Address({ location }) {
	return (
		<h1 className="text-2xl font-semibold text-center capitalize">
			{location || "Unknown location"}
		</h1>
	);
}
