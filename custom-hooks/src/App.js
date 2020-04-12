import React, { useState } from "react"
import "./App.scss"
import Clock from "./components/Clock"
import BetterClock from "./components/BetterClock"

function App() {
	const [showClock, setShowClock] = useState(true)
	return (
		<div className="app">
			<h1>Custom Hooks</h1>

			{showClock && <Clock />}
			<BetterClock />
			<button onClick={() => setShowClock(false)}>HideClock</button>
		</div>
	)
}

export default App
