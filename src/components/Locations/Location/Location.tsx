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
		xAxis: {
			categories: data.hourly.time.map(time => format(time, 'MM-dd HH:mm')),
			crosshair: true,
		},
		series: [
			{
				name: 'temperature',
				type: 'line',
				data: data.hourly.temperature.map(temp => +temp.toFixed(1)),
			},
			{
				name: 'humidity',
				type: 'line',
				data: data.hourly.humidity.map(hum => +hum.toFixed(1)),
			},
			{
				name: 'wind speed',
				type: 'line',
				data: data.hourly.windSpeed.map(wind => +wind.toFixed(1)),
			},
		],
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>{data.locationName}</CardTitle>
			</CardHeader>
			<CardContent>
				<HighchartsReact highcharts={Highcharts} options={options} />
			</CardContent>
		</Card>
	);
}
