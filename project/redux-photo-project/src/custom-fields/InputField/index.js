import React from "react"
import PropTypes from "prop-types"
import {FormGroup, Input, Label} from "reactstrap"

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
}

InputField.defaultProps = {
	type: "text",
	label: "",
	placeholder: "",
	disabled: false,
}

function InputField(props) {
	const {
		//Formik
		field,
		//...
		type,
		label,
		placeholder,
		disabled,
	} = props

	const {
		name,
		//...
		// value, onChange, onBlur
	} = field

	return (
		<div>
			<FormGroup>
				{label && <Label for={name}>{label}</Label>}

				<Input
					id={name}
					// name={name}
					// value={value}
					// onChange={onChange}
					// onBlur={onBlur}
					{...field} // equivalent to 4 lines above
					type={type}
					disabled={disabled}
					placeholder={placeholder}
				/>
			</FormGroup>
		</div>
	)
}

export default InputField
