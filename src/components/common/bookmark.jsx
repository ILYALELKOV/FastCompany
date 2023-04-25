import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ bookmark, onUpdateBookmark, id }) => {
	return (
		<>
			<i
				className={bookmark ? 'bi bi-heart-fill mx-4' : 'bi bi-heart mx-4'}
				style={{ fontSize: '1.5rem' }}
				onClick={() => onUpdateBookmark(id)}
			></i>
		</>
	)
}

Bookmark.propTypes = {
	bookmark: PropTypes.bool.isRequired,
	onUpdateBookmark: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
}

export default Bookmark
