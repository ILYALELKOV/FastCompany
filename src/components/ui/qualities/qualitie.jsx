import React from 'react'
import PropTypes from 'prop-types'

const Qualitie = ({ user }) => {
	return (
		<>
			{user.qualities.map((item) => (
				<span key={item._id} className={'fs-6 m-1 badge bg-' + item.color}>
					{item.name}
				</span>
			))}
		</>
	)
}

Qualitie.propTypes = {
	user: PropTypes.object.isRequired
}

export default Qualitie
