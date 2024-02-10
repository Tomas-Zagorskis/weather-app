import GoogleMap from './components/GoogleMap/GoogleMap';
import Locations from './components/Locations/Locations';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
	return (
		<main className='flex flex-col justify-start items-center my-2 gap-5'>
			<h1 className='text-6xl mt-8 font-bold text-slate-600'>Weather App</h1>
			<Toolbar />
			<h2 className='text-2xl font-bold text-slate-600 -mb-4'>
				Click Location on Map:
			</h2>
			<GoogleMap />
			<Locations />
		</main>
	);
}

export default App;
