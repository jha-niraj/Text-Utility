import { useState, createContext } from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';

const backgroundColor = createContext("");

const App = () => {
	
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	)
}

export default App
