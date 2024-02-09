import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function fetchLocationName(lat: number, lng: number) {
	const fetchLocation = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
			import.meta.env.VITE_GOOGLE_MAPS_API_KEY
		}`,
	);

	const locationResponse = await fetchLocation.json();

	let locationName = 'Unknown place';

	if (locationResponse.status === 'OK') {
		const location: string = locationResponse.plus_code.compound_code;

		locationName = location.slice(location.indexOf(' ') + 1, location.length);
	}

	return locationName;
}
