import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../api'
import Loader from './loader'
import PropTypes from 'prop-types'
import Qualitie from './qualitie'

const UserPage = ({ userId }) => {
	const history = useHistory()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		api.users.getById(userId).then((data) => setUser(data))
	}, [userId])
	useEffect(() => {
		if (user || user === undefined) {
			setIsLoading(false)
		}
	}, [user])
	const handleSave = () => {
		history.push('/users')
	}

	return (
		<div>
			{isLoading ? (
				<div className="mt-5">
					<Loader />
				</div>
			) : user ? (
				<div className="card_user">
					<h2>Имя: {user.name}</h2>
					<p>Профессия: {user.profession.name}</p>
					<p>
						Качества:
						<Qualitie user={user} />
					</p>
					<p>Встретился раз: {user.completedMeetings}</p>
					<p>Оценка: {user.rate}</p>
					<div className="btn_container">
						<button
							onClick={() => {
								handleSave()
							}}
							className="btn_all_users"
						>
							Все пользователи
						</button>
					</div>
				</div>
			) : (
				<div className="text-center mt-5 text-danger">
					<h1>
						Пользователь <span>{userId}</span> не найден
					</h1>
					<button
						onClick={() => {
							handleSave()
						}}
						className="btn_all_users"
					>
						Все пользователи
					</button>
				</div>
			)}
		</div>
	)
}

export default UserPage

UserPage.propTypes = {
	userId: PropTypes.string.isRequired
}
