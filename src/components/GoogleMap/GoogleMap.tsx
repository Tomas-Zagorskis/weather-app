import { RootState } from '@/app/store';
import { fetchWeather } from '@/lib/api';
import {
	APIProvider,
	Map,
	MapMouseEvent,
	Marker,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function GoogleMap() {
	const date = useSelector((state: RootState) => state.dateRange);
	const [positions, setPositions] = useState<{ lat: number; lng: number }[]>(
		[],
	);
	const center = { lat: 54.898, lng: 23.904 };

	const handleMapClick = async (e: MapMouseEvent) => {
		const lat = e.detail.latLng!.lat;
		const lng = e.detail.latLng!.lng;
		setPositions(prev => [...prev, { lat, lng }]);

		const response = await fetchWeather(lat, lng, date);

		console.log(response);
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
