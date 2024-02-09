export type WeatherData = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	locationName: string;
	latitude: number;
	longitude: number;
	current: {
		time: Date;
		temperature: number;
		weatherCode: number;
		windSpeed: number;
		windDirection: number;
	};
	hourly: {
		time: Date[];
		temperature: number[];
		humidity: number[];
		windSpeed: number[];
	};
};
