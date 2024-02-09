import { fetchWeatherApi } from 'openmeteo';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

export async function fetchWeather(
	lat: number,
	lon: number,
	date: DateRange | undefined,
) {
	const params = {
		latitude: [lat],
		longitude: [lon],
		current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
		start_date: format(date!.from!, 'yyyy-MM-dd'),
		end_date: format(date!.to!, 'yyyy-MM-dd'),
		hourly: 'temperature_2m,relative_humidity_2m,wind_speed_10m',
	};

	const url = 'https://api.open-meteo.com/v1/forecast';
	const responses = await fetchWeatherApi(url, params);
	const response = responses[0];

	const current = response.current()!;
	const hourly = response.hourly()!;

	const weatherData = {
		current: {
			time: new Date(Number(current.time()) * 1000),
			temperature: +current.variables(0)!.value().toFixed(1),
			weatherCode: current.variables(1)!.value(),
			windSpeed: +current.variables(2)!.value().toFixed(1),
			windDirection: +current.variables(3)!.value().toFixed(1),
		},
		hourly: {
			time: range(
				Number(hourly.time()),
				Number(hourly.timeEnd()),
				hourly.interval(),
			).map(t => new Date((t - 2 * 60 * 60) * 1000)),
			temperature: hourly.variables(0)!.valuesArray()!,
			humidity: hourly.variables(1)!.valuesArray()!,
			windSpeed: hourly.variables(1)!.valuesArray()!,
		},
	};

	return weatherData;
}

const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
