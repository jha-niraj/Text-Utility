import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import TextUtils from "./pages/TextUtils";
import ImageToText from './pages/ImageToText';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {

	return (
		<ThemeProvider>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/textutils" element={<TextUtils />} />
				<Route path="/imagetotext" element={<ImageToText />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
