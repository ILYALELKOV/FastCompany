import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (length > 0) {
			setIsLoading(false)
		}
	}, [length])

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
					'fs-5 m-2 badge ' +
					(isLoading ? 'bg-info' : length > 0 ? 'bg-dark ' : 'bg-danger')
				}
			>
				{isLoading
					? 'Загрузка пользователей ...'
					: length > 0
					? renderMessage(length)
					: 'Никто с тобой не тусанет'}
			</span>
		</div>
	)
}

SearchStatus.propTypes = {
	length: PropTypes.number.isRequired
}

export default SearchStatus
