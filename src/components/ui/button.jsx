import React from 'react'
import PropTypes from 'prop-types'
import style from './button.module.css'

const Button = ({ onDeleteUser, user, children }) => {
	return (
		<>
			<button
				className={`btn btn-danger btn-lg ${style.btn}`}
				onClick={() => onDeleteUser(user._id)}
			>
				{children}
			</button>
		</>
	)
}

export default Button

Button.propTypes = {
	user: PropTypes.object.isRequired,
	onDeleteUser: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired
}
