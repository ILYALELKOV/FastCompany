import React from 'react'

const SearchStatus = ({ length }) => {
	const renderMessage = (number) => {
		const last = Number(number.toString().slice(-1))

		if (
			(last > 1 && last < 5 && number < 5) ||
			(number > 20 && last > 1 && last < 5)
		) {
			return `${number} человека тусанет с тобой сегодня`
		} else {
			return `${number} человек тусанет с тобой сегодня`
		}
	}

	return (
		<div>
			<span
				className={
					'fs-6 m-2 badge ' + (length > 0 ? 'bg-primary ' : 'bg-danger')
				}
			>
				{length > 0 ? renderMessage(length) : 'Никто с тобой не тусанет'}
			</span>
		</div>
	)
}

export default SearchStatus
