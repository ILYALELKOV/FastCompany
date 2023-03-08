import React, { useState } from 'react'
import api from '../api'

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())

	const handleDeleteUser = (id) => {
		setUsers((prevState) => prevState.filter((users) => users._id !== id))
	}

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
		<>
			<span
				className={
					'fs-6 m-2 badge ' + (users.length > 0 ? 'bg-primary ' : 'bg-danger')
				}
			>
				{users.length > 0
					? renderMessage(users.length)
					: 'Никто с тобой не тусанет'}
			</span>
			{users.length > 0 && (
				<table className="table">
					<thead>
						<tr>
							<th>Имя</th>
							<th>Качества</th>
							<th>Профессия</th>
							<th>Встретился, раз</th>
							<th>Оценка</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>
									{user.qualities.map((item) => (
										<span
											key={item._id}
											className={'m-1 badge bg-' + item.color}
										>
											{item.name}
										</span>
									))}
								</td>
								<td>{user.profession.name}</td>
								<td>{user.completedMeetings}</td>
								<td>{user.rate + ' / 5'}</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => handleDeleteUser(user._id)}
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	)
}

export default Users
