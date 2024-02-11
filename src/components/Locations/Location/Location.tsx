import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import { WeatherData } from '@/types/types';
import { format } from 'date-fns';
import { isTemp, isHumidity, isWindSpeed } from '@/signals/signals';
import { weather } from '@/lib/const';
import { useDispatch } from 'react-redux';
import { removeLocationWeather } from '@/feat/locationsWeather/locationsWeatherSlice';

type LocationProp = {
	data: WeatherData;
};

export default function Location({ data }: LocationProp) {
	const dispatch = useDispatch();

	const options: Highcharts.Options = {
		title: {
			text: 'Weather Info',
		},
		chart: {
			zooming: {
				type: 'x',
			},
			backgroundColor: 'white',
			type: 'area',
		},
		xAxis: {
			categories: data.hourly.time.map(time =>
				format(time, 'yyyy-MM-dd HH:mm'),
			),
			crosshair: true,
		},
		yAxis: {
			title: {
				text: '',
			},
		},
		accessibility: {
			enabled: false,
		},
		series: [
			{
				visible: isTemp.value,
				name: 'temperature',
				type: 'line',
				tooltip: {
					valueDecimals: 1,
					valueSuffix: ' °C',
				},
				marker: {
					enabled: false,
				},
				data: data.hourly.temperature,
			},
			{
				visible: isHumidity.value,
				name: 'humidity',
				type: 'line',
				tooltip: {
					valueSuffix: ' %',
				},
				marker: {
					enabled: false,
				},
				data: data.hourly.humidity,
			},
			{
				visible: isWindSpeed.value,
				name: 'wind speed',
				type: 'line',
				tooltip: {
					valueDecimals: 1,
					valueSuffix: ' m/s',
				},
				marker: {
					enabled: false,
				},
				data: data.hourly.windSpeed,
			},
		],
	};

	return (
		<Card className='relative min-w-[40rem]'>
			<XCircle
				className='absolute top-2 right-2 h-6 w-6 text-red-300 cursor-pointer hover:text-red-600 transition-all duration-300'
				onClick={() => dispatch(removeLocationWeather(data.id))}
			/>
			<CardHeader>
				<CardTitle className='text-slate-700 text-center mt-2'>
					{data.locationName}
				</CardTitle>
				<CardDescription className=' text-center'>
					Current temperature: {data.current.temperature} °C; Wind Speed:{' '}
					{data.current.windSpeed} m/s; {weather[data.current.weatherCode]}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</CardContent>
		</Card>
	);
}
