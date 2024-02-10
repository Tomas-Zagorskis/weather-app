import { Checkbox } from '@/components/ui/checkbox';
import { isTemp, isHumidity, isWindSpeed } from '@/signals/signals';

export default function WeatherFilter() {
	return (
		<div className='flex gap-3 text-emerald-950 bg-white h-10 px-3 rounded-md'>
			<div className='flex items-center gap-1'>
				<Checkbox
					id='temp'
					checked={isTemp.value}
					onClick={() => (isTemp.value = !isTemp.value)}
				/>
				<label
					htmlFor='temp'
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
					temperature
				</label>
			</div>
			<div className='flex items-center gap-1'>
				<Checkbox
					id='humidity'
					checked={isHumidity.value}
					onClick={() => (isHumidity.value = !isHumidity.value)}
				/>
				<label
					htmlFor='humidity'
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
					humidity
				</label>
			</div>
			<div className='flex items-center gap-1'>
				<Checkbox
					id='windSpeed'
					checked={isWindSpeed.value}
					onClick={() => (isWindSpeed.value = !isWindSpeed.value)}
				/>
				<label
					htmlFor='windSpeed'
					className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
					wind speed
				</label>
			</div>
		</div>
	);
}
