import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'

const UserPage = () => {
	const [user, setUser] = useState(null)
	const params = useParams()
	const { userId } = params

	useEffect(() => {
		api.users.getById(userId).then((data) => setUser(data))
	}, [userId])
	console.log(user)
	return (
		<div>
			{user && (
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
				</div>
			)}
		</div>
	)
}

export default UserPage
