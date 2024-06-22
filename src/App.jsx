import { useState, createContext } from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import TextUtils from "./pages/TextUtils";
import ImageToText from './pages/ImageToText';

const backgroundColor = createContext("");

const App = () => {
	
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/textutils" element={<TextUtils />} />
			<Route path="/imagetotext" element={<ImageToText />} />
		</Routes>
	)
}

export default App
