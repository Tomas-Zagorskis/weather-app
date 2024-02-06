import {
	APIProvider,
	Map,
	MapMouseEvent,
	Marker,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

function GoogleMap() {
	const [positions, setPositions] = useState<{ lat: number; lng: number }[]>(
		[],
	);
	const center = { lat: 54.898, lng: 23.904 };

	const handleMapClick = (e: MapMouseEvent) => {
		const lat = e.detail.latLng!.lat;
		const lng = e.detail.latLng!.lng;
		setPositions(prev => [...prev, { lat, lng }]);

		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`,
		)
			.then(response => response.json())
			.then(data => console.log(data));
	};

	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<div className='map-container border rounded-xl overflow-hidden snap-center snap-always'>
				<Map center={center} zoom={7} disableDefaultUI onClick={handleMapClick}>
					{positions.length > 0 &&
						positions.map((position, index) => (
							<Marker
								key={index}
								position={position}
								onClick={() =>
									setPositions(prev => prev.filter((_, i) => i !== index))
								}
							/>
						))}
				</Map>
			</div>
		</APIProvider>
	);
}

export default GoogleMap;
