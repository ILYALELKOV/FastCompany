import React from 'react'

const Loader = () => {
	return (
		<div className="d-flex flex-column align-items-center p-3 bg-info mt-5 rounded-4">
			<div className="spinner-border text-warning mb-2 " role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			<p className="text-white fw-bold mt-3">Подождите, идет загрузка...</p>
		</div>
	)
}

export default Loader
