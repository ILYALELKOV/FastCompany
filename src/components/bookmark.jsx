import React from 'react'

const Bookmark = ({ onUpdateBookmark, bookmark, _id }) => {
	return (
		<>
			<i
				className={bookmark ? 'bi bi-circle-fill' : 'bi bi-circle'}
				onClick={() => onUpdateBookmark(_id)}
			></i>
		</>
	)
}

export default Bookmark
