import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherData } from '@/types/types';
import { format } from 'date-fns';

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
				<CardTitle>{data.locationName}</CardTitle>
			</CardHeader>
			<CardContent>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</CardContent>
		</Card>
	);
}
