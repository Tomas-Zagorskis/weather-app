import { Toaster, toast } from 'sonner';
import GoogleMap from './components/GoogleMap/GoogleMap';
import Locations from './components/Locations/Locations';
import Toolbar from './components/Toolbar/Toolbar';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	if (!isLoggedIn) {
		return (
			<main className='flex flex-col justify-start items-center my-2 gap-5'>
				<Toaster position='bottom-right' richColors />
				<h1 className='text-6xl mt-8 font-bold text-slate-600'>Weather App</h1>
				<h2 className='text-3xl font-bold text-slate-600 mt-40'>
					Please Login
				</h2>
				<GoogleLogin
					onSuccess={() => setIsLoggedIn(true)}
					onError={() => toast.error('Login Failed')}
					shape='pill'
					auto_select
				/>
			</main>
		);
	}
	return (
		<main className='flex flex-col justify-start items-center my-2 gap-5'>
			<Toaster position='bottom-right' richColors />
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
