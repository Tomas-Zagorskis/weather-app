import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { fetchWeather } from '@/lib/api';
import {
	APIProvider,
	Map,
	MapMouseEvent,
	Marker,
} from '@vis.gl/react-google-maps';
import { fetchLocationName } from '@/lib/utils';
import {
	addLocationWeather,
	removeLocationWeather,
} from '@/feat/locationsWeather/locationsWeatherSlice';

function GoogleMap() {
	const date = useSelector((state: RootState) => state.dateRange);
	const locations = useSelector((state: RootState) => state.locations);
	const dispatch = useDispatch();

	const center = { lat: 54.898, lng: 23.904 };
	const positions = locations?.map(location => ({
		id: location.id,
		lat: location.latitude,
		lng: location.longitude,
	}));

	const handleMapClick = async (e: MapMouseEvent) => {
		const lat = e.detail.latLng!.lat;
		const lng = e.detail.latLng!.lng;

		const locationName = await fetchLocationName(lat, lng);

		const response = await fetchWeather(lat, lng, date);
		const location = { ...response, locationName };

		dispatch(addLocationWeather(location));
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
								onClick={() => dispatch(removeLocationWeather(position.id))}
							/>
						))}
				</Map>
			</div>
		</APIProvider>
	);
}

export default GoogleMap;
