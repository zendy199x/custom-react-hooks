import React from "react"
import PropTypes from "prop-types"
import "./HobbyList.css"

HobbyList.propTypes = {
	hobbyList: PropTypes.array,
	activeId: PropTypes.number,
	onHobbyClick: PropTypes.func,
}

HobbyList.defaultProps = {
	hobbyList: [],
	activeId: null,
	onHobbyClick: null,
}

function HobbyList(props) {
	const {hobbyList, activeId, onHobbyClick} = props

	const handleClick = (hobby) => {
		if (onHobbyClick) {
			onHobbyClick(hobby)
		}
	}

	return (
		<ul className="hobby-list">
			{hobbyList.map((hobby) => (
				<li
					key={hobby.id}
					className={hobby.id === activeId ? "active" : ""}
					onClick={() => handleClick(hobby)}
				>
					{hobby.title}
				</li>
			))}
		</ul>
	)
}

export default HobbyList
