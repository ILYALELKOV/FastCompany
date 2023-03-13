import React, { useState } from 'react'
import api from '../api'
import SearchStatus from './searchStatus'
import Bookmark from './bookmark'
import Qualitie from './qualitie'

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())

	const handleDeleteUser = (id) => {
		setUsers((prevState) => prevState.filter((users) => users._id !== id))
	}

	const handleUpdateBookmark = (id) => {
		const updatedUsers = users.map((user) => {
			if (user._id === id) {
				return { ...user, bookmark: !user.bookmark }
			}
			return user
		})
		setUsers(updatedUsers)
	}

	return (
		<>
			<SearchStatus length={users.length} />
			{users.length > 0 && (
				<table className="table">
					<thead>
						<tr>
							<th>Имя</th>
							<th>Качества</th>
							<th>Профессия</th>
							<th>Встретился, раз</th>
							<th>Оценка</th>
							<th>Избранное</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>
									<Qualitie user={user} />
								</td>
								<td>{user.profession.name}</td>
								<td>{user.completedMeetings}</td>
								<td>{user.rate + ' / 5'}</td>
								<td>
									<Bookmark {...user} onUpdateBookmark={handleUpdateBookmark} />
								</td>
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
