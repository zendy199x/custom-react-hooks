import React, {useState, useEffect} from "react"
import "./Clock.scss"

function formatDate(date) {
	if (!date) return ""

	const hours = `0${date.getHours()}`.slice(-2)
	const minutes = `0${date.getMinutes()}`.slice(-2)
	const seconds = `0${date.getSeconds()}`.slice(-2)
	return `${hours}:${minutes}:${seconds}`
}

function Clock() {
	const [timeString, settimeString] = useState("")

	useEffect(() => {
		const clockInterval = setInterval(() => {
			const now = new Date()
			const newTimeString = formatDate(now)

			settimeString(newTimeString)
		}, 1000)

		return () => {
			console.log(`Clock cleanup`)
			clearInterval(clockInterval)
		}
	}, [])

	return (
		<div>
			<p className="timeString">{timeString}</p>
		</div>
	)
}

export default Clock
