import React from "react"
import PropTypes from "prop-types"
import {FormGroup, Label} from "reactstrap"
import RandomPhoto from "components/RandomPhoto"

RandomPhotoField.propTypes = {
	fields: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
	label: "",
}

function RandomPhotoField(props) {
	const {field, form, label} = props
	const {name, value, onBlur} = field

	const handleImageUrlChange = (newImageUrl) => {
		form.setFieldValue(name, newImageUrl)
	}

	return (
		<FormGroup>
			{label && <Label for={name}>Photo</Label>}

			<RandomPhoto
				name={name}
				imageUrl={value}
				onImageUrlChange={handleImageUrlChange}
				onRandomButtonBlur={onBlur}
			/>
		</FormGroup>
	)
}

export default RandomPhotoField
