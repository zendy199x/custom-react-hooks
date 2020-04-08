import React, {useState, useRef} from "react"
import PropTypes from "prop-types"

PostFilterForm.propTypes = {
	onSubmit: PropTypes.func,
}

PostFilterForm.defaultProps = {
	onSubmit: null,
}

function PostFilterForm(props) {
	const {onSubmit} = props
	const [searchTerm, setSearchTearm] = useState("")
	const typingTimeoutRef = useRef(null)

	function handleSearchTermChange(e) {
        const value = e.target.value;
		setSearchTearm(value)

		if (!onSubmit) return

		//SET -- 100 --CLEAR, SET -- 300 --> SUBMIT
		//SET -- 300 --> SUBMIT
		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current)
		}

		typingTimeoutRef.current = setTimeout(() => {
			const formValues = {
				searchTerm: value,
			}
			onSubmit(formValues)
		}, 300)
	}
	return (
		<div submit={onSubmit}>
			<form>
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearchTermChange}
				></input>
			</form>
		</div>
	)
}

export default PostFilterForm
