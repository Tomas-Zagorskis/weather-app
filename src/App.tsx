import GoogleMap from './components/GoogleMap/GoogleMap';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
	return (
		<main className='flex flex-col justify-start items-center my-2 gap-5'>
			<Toolbar />
			<GoogleMap />
			<div className='h-[200vh]'></div>
		</main>
	);
}

export default App;
