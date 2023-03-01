import './assets/styles/App.css';
import React, { useState } from 'react';

import Router from './components/Router/Router';
import Loader from './components/Loader/Loader';

function App() {
	const [loading] = useState(false);
	if (loading) {
		return <Loader />;
	}
	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;
