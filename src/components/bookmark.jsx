import React from 'react'

const Bookmark = ({ onUpdateBookmark, bookmark, _id }) => {
	return (
		<>
			<i
				className={bookmark ? 'bi bi-heart-fill mx-4' : 'bi bi-heart mx-4'}
				style={{ fontSize: '1.5rem' }}
				onClick={() => onUpdateBookmark(_id)}
			></i>
		</>
	)
}

export default Bookmark
