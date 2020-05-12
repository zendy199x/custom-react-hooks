import React from "react"
import PropTypes from "prop-types"
import {useSelector, useDispatch, shallowEqual} from "react-redux"
import HobbyList from "./../components/Home/HobbyList"
import {addNewHobby, setActiveHobby} from "../actions/hobby"

HomePage.propTypes = {}

const randomNumber = () => {
	return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
	// strict comparison ===
	const hobbyList = useSelector((state) => state.hobby.list)
	const activeId = useSelector((state) => state.hobby.activeId)

	//shallow comparison: {a, b} {a, b}
	// const hobbyState = useSelector((state) => ({
	// 	list: state.hobby.list,
	// 	activeId: state.hobby.activeId,
	// }), shallowEqual)
	console.log("Hobby List: ", hobbyList)
	console.log("Active ID: ", activeId)

	const dispatch = useDispatch()

	const handleAddHobbyList = () => {
		// Random a hobby object: id + title
		const newId = randomNumber()
		const newHobby = {
			id: newId,
			title: `Hobby ${newId}`,
		}
		// Dispatch action to add a new hobby to redux store
		const action = addNewHobby(newHobby)
		dispatch(action)
	}

	const handleHobbyClick = (hobby) => {
		const action = setActiveHobby(hobby)
		dispatch(action)
	}

	return (
		<div className="home-page">
			<h1>Redux Hook - Home Page</h1>

			<button onClick={handleAddHobbyList}>Random Hobby</button>
			<HobbyList
				hobbyList={hobbyList}
				activeId={activeId}
				onHobbyClick={handleHobbyClick}
			/>
		</div>
	)
}

export default HomePage
