import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
	label,
	value,
	onChange,
	defaultOption,
	options,
	error
}) => {
	const getInputClasses = () => {
		return 'form-select' + (error ? ' is-invalid' : '')
	}

	const optionsArray =
		!Array.isArray(options) && typeof options === 'object'
			? Object.keys(options).map((optionName) => ({
					name: options[optionName].name,
					value: options[optionName]._id
			  }))
			: options
	return (
		<div className="mb-4">
			<label htmlFor="validationCustom04" className="form-label">
				{label}
			</label>
			<select
				value={value}
				onChange={onChange}
				name="profession"
				className={getInputClasses()}
				id="validationCustom04"
			>
				<option disabled value="">
					{defaultOption}
				</option>
				{optionsArray &&
					optionsArray.map((option) => (
						<option key={option._id} value={option.value}>
							{option.name}
						</option>
					))}
			</select>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	)
}

SelectField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	defaultOption: PropTypes.string,
	options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	error: PropTypes.string
}

export default SelectField