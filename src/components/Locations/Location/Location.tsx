import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { WeatherData } from '@/types/types';
import { format } from 'date-fns';
import { isTemp, isHumidity, isWindSpeed } from '@/signals/signals';
import { weather } from '@/lib/const';

type LocationProp = {
	data: WeatherData;
};

export default function Location({ data }: LocationProp) {
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
		<Card className='min-w-[40rem]'>
			<CardHeader>
				<CardTitle className='text-slate-700 text-center'>
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
