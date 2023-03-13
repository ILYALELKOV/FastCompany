import React, { useState } from 'react'
import api from '../api'
import SearchStatus from './searchStatus'
import User from './user'

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
						<User
							users={users}
							onUpdateBookmark={handleUpdateBookmark}
							onDeleteUser={handleDeleteUser}
						/>
					</tbody>
				</table>
			)}
		</>
	)
}

export default Users
