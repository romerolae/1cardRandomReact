import { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';
import MainCard from './components/MainCard';

function App() {
	/* Encadenamiento opcional*/

	return (
		<div className="App">
			<MainCard />
			<MainCard />
			<MainCard />
			<MainCard />
		</div>
	);
}

export default App;
