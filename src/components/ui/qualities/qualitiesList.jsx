import React from 'react'
import Qualitie from './qualitie'
import PropTypes from 'prop-types'

const QualitiesList = ({ user }) => {
	return (
		<>
			<Qualitie user={user} />
		</>
	)
}

export default QualitiesList

QualitiesList.propTypes = {
	user: PropTypes.object.isRequired
}
