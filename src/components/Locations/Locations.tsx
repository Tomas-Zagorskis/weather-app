import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';
import Location from './Location/Location';

export default function Locations() {
	const locations = useSelector((state: RootState) => state.locations);
	return (
		<div>
			{locations.map(location => (
				<Location data={location} key={location.id} />
			))}
		</div>
	);
}
