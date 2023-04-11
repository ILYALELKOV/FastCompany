import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import api from '../api'
import Loader from './loader'

const UserPage = () => {
	const history = useHistory()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const params = useParams()
	const { userId } = params

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
						{user.qualities.map((qualitie) => (
							<span
								className={'fs-7 m-1 badge bg-' + qualitie.color}
								key={qualitie._id}
							>
								{qualitie.name}
							</span>
						))}
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
					<h1>Пользователь не найден</h1>
				</div>
			)}
		</div>
	)
}

export default UserPage
