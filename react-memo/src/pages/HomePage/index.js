import React, { useState } from "react"
import "./App.scss"
import Clock from "./components/Clock"
import BetterClock from "./components/BetterClock"
import MagicBox from './components/MagicBox'

function App() {
	const [showClock, setShowClock] = useState(true)
	return (
		<div className="app">
			<h1>Custom Hooks</h1>

			{showClock && <Clock />}
			<BetterClock />
			<button onClick={() => setShowClock(false)}>HideClock</button>
			<MagicBox />
		</div>
	)
}

export default App
