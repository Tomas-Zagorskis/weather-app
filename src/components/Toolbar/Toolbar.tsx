import DatePickerWithRange from './DatePickerWithRange/DatePickerWithRange';
import WeatherFilter from './WeatherFilter/WeatherFilter';

export default function Toolbar() {
	return (
		<header className='sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 px-5 rounded-lg bg-slate-400 bg-opacity-20 backdrop-blur-sm'>
			<DatePickerWithRange />
			<WeatherFilter />
		</header>
	);
}
