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
		setPositions(prev => [
			...prev,
			{ lat: e.detail.latLng!.lat, lng: e.detail.latLng!.lng },
		]);
	};

	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<div className='map-container'>
				<Map
					center={center}
					zoom={10}
					disableDefaultUI
					onClick={handleMapClick}>
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
