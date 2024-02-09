import GoogleMap from './components/GoogleMap/GoogleMap';
import Locations from './components/Locations/Locations';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
	return (
		<main className='flex flex-col justify-start items-center my-2 gap-5'>
			<Toolbar />
			<GoogleMap />
			<Locations />
		</main>
	);
}

export default App;
