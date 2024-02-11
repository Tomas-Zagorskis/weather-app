import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
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

	const locationName = `Unknown place at 
		latitude: ${lat.toFixed(3)}, longitude: ${lng.toFixed(3)}`;

	if (locationResponse.status !== 'OK') {
		toast.error(
			`${locationResponse.status}: ${locationResponse.error_message}`,
		);
		return locationName;
	}
	const location: string = locationResponse.plus_code.compound_code;

	if (!location) return locationName;

	return location.slice(location.indexOf(' ') + 1, location.length);
}
