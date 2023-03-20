import React from 'react'

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

export default Bookmark
