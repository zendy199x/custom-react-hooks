import {useEffect, useState} from "react"

function formatDate(date) {
	if (!date) return ""

	const hours = `0${date.getHours()}`.slice(-2)
	const minutes = `0${date.getMinutes()}`.slice(-2)
	const seconds = `0${date.getSeconds()}`.slice(-2)
	return `${hours}:${minutes}:${seconds}`
}

function useClock() {
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

	return {timeString}
}

export default useClock
