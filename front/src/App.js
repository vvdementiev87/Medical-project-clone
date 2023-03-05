import './assets/styles/App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Router from './components/Router/Router';
import Loader from './components/Loader/Loader';

function App() {
	return (
		<div className="App">
			<Router />
		</div>
	);
}

export default App;
